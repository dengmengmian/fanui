import type { Page } from "@playwright/test";

export type FanUIFinding = {
  rule: string;
  message: string;
  selector?: string;
  actual?: unknown;
  expected?: unknown;
};

export type FanUILayoutAudit = {
  document: {
    clientWidth: number;
    scrollWidth: number;
    overflowPx: number;
  };
  declarations: {
    workspaces: number;
    collapsibleRegions: number;
    replacementControls: number;
  };
  findings: FanUIFinding[];
};

export async function runFanUILayoutAudit(
  page: Page,
  options: { mobile: boolean; minimumTouchTarget?: number },
): Promise<FanUILayoutAudit> {
  return page.evaluate(({ mobile, minimumTouchTarget }) => {
    const findings: FanUIFinding[] = [];
    const root = document.documentElement;
    const viewportWidth = root.clientWidth;
    const viewportHeight = window.innerHeight;

    const selectorFor = (element: Element) => {
      if (element.id) return `#${CSS.escape(element.id)}`;
      const marker = element.getAttribute("data-testid") ?? element.getAttribute("data-fanui-id");
      if (element.hasAttribute("data-testid")) return `[data-testid="${CSS.escape(marker ?? "")}"]`;
      if (marker) return `[data-fanui-id="${CSS.escape(marker)}"]`;
      const parent = element.parentElement;
      const index = parent ? [...parent.children].indexOf(element) + 1 : 1;
      return `${element.tagName.toLowerCase()}:nth-child(${index})`;
    };

    const isVisible = (element: Element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== "none"
        && style.visibility !== "hidden"
        && Number(style.opacity) !== 0
        && rect.width > 0
        && rect.height > 0;
    };

    const accessibleName = (element: Element) => {
      const ariaLabel = element.getAttribute("aria-label")?.trim();
      if (ariaLabel) return ariaLabel;
      const labelledBy = element.getAttribute("aria-labelledby")?.trim();
      if (labelledBy) {
        const label = labelledBy
          .split(/\s+/)
          .map((id) => document.getElementById(id)?.textContent?.trim() ?? "")
          .filter(Boolean)
          .join(" ");
        if (label) return label;
      }
      const text = element.textContent?.trim();
      if (text) return text;
      const title = element.getAttribute("title")?.trim();
      if (title) return title;
      const imageAlt = element.querySelector("img[alt]")?.getAttribute("alt")?.trim();
      return imageAlt ?? "";
    };

    const overflowPx = Math.max(0, root.scrollWidth - root.clientWidth);
    if (overflowPx > 1) {
      findings.push({
        rule: "document-horizontal-overflow",
        message: `Document is ${overflowPx}px wider than its viewport.`,
        actual: root.scrollWidth,
        expected: `<= ${root.clientWidth + 1}`,
      });
    }

    const iconOnlyCandidates = [...document.querySelectorAll<HTMLElement>(
      "[data-fanui-icon-only], button, a[href], [role='button']",
    )].filter((element) => {
      if (!isVisible(element)) return false;
      if (element.hasAttribute("data-fanui-icon-only")) return true;
      const visibleText = [...element.childNodes]
        .filter((node) => node.nodeType === Node.TEXT_NODE)
        .map((node) => node.textContent?.trim() ?? "")
        .join("");
      const hasGraphic = Boolean(element.querySelector("svg, img, [class*='icon'], [data-icon]"));
      return hasGraphic && !visibleText;
    });

    for (const element of iconOnlyCandidates) {
      if (!accessibleName(element)) {
        findings.push({
          rule: "icon-only-accessible-name",
          message: "Visible icon-only control has no accessible name.",
          selector: selectorFor(element),
        });
      }
    }

    if (mobile) {
      const controls = [...document.querySelectorAll<HTMLElement>(
        "[data-fanui-touch-target], button, input:not([type='hidden']), select, textarea, [role='button'], [role='switch']",
      )].filter(isVisible);

      for (const element of controls) {
        const rect = element.getBoundingClientRect();
        if (rect.width + 0.5 < minimumTouchTarget || rect.height + 0.5 < minimumTouchTarget) {
          findings.push({
            rule: "mobile-touch-target",
            message: `Control is ${Math.round(rect.width)}x${Math.round(rect.height)}px on a mobile viewport.`,
            selector: selectorFor(element),
            actual: { width: rect.width, height: rect.height },
            expected: { minimumWidth: minimumTouchTarget, minimumHeight: minimumTouchTarget },
          });
        }
      }
    }

    for (const element of document.querySelectorAll<HTMLElement>("pre, code[data-fanui-local-scroll]")) {
      if (!isVisible(element)) continue;
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      const hasOverflowingContent = element.scrollWidth > element.clientWidth + 1;
      const ownsLocalScroller = ["auto", "scroll", "overlay"].includes(style.overflowX);
      if (hasOverflowingContent && !ownsLocalScroller) {
        findings.push({
          rule: "code-local-horizontal-scroll",
          message: "Overflowing code content does not own an intentional local horizontal scroller.",
          selector: selectorFor(element),
          actual: style.overflowX,
          expected: "auto or scroll",
        });
      }
      const paintedRight = rect.right + (ownsLocalScroller ? 0 : Math.max(0, element.scrollWidth - element.clientWidth));
      if (rect.left < -1 || paintedRight > viewportWidth + 1) {
        findings.push({
          rule: "code-causes-page-overflow",
          message: "Code block extends outside the document viewport.",
          selector: selectorFor(element),
          actual: { left: rect.left, right: paintedRight },
          expected: { left: ">= -1", right: `<= ${viewportWidth + 1}` },
        });
      }
    }

    const workspaces = [...document.querySelectorAll<HTMLElement>(
      '[data-fanui-workspace="remaining-viewport"]',
    )].filter(isVisible);
    for (const workspace of workspaces) {
      const rect = workspace.getBoundingClientRect();
      const bottomGap = Math.abs(viewportHeight - rect.bottom);
      if (bottomGap > 24 || rect.height < viewportHeight * 0.45) {
        findings.push({
          rule: "declared-workspace-viewport-ownership",
          message: "Declared remaining-viewport workspace does not materially own the available viewport.",
          selector: selectorFor(workspace),
          actual: { height: rect.height, bottomGap },
          expected: { minimumHeight: viewportHeight * 0.45, maximumBottomGap: 24 },
        });
      }
    }

    const collapsibleRegions = [...document.querySelectorAll<HTMLElement>("[data-fanui-collapsible]")];
    const replacementControls = [...document.querySelectorAll<HTMLElement>("[data-fanui-replacement-for]")];
    for (const region of collapsibleRegions) {
      if (isVisible(region)) continue;
      const id = region.getAttribute("data-fanui-collapsible");
      if (!id) continue;
      const replacements = replacementControls.filter(
        (control) => control.getAttribute("data-fanui-replacement-for") === id && isVisible(control),
      );
      if (replacements.length === 0) {
        findings.push({
          rule: "collapsed-region-replacement",
          message: `Collapsed region "${id}" has no visible replacement access control.`,
          selector: selectorFor(region),
        });
      } else if (replacements.every((control) => !accessibleName(control))) {
        findings.push({
          rule: "collapsed-region-replacement-name",
          message: `Replacement access for collapsed region "${id}" has no accessible name.`,
          selector: selectorFor(replacements[0]),
        });
      }
    }

    return {
      document: { clientWidth: root.clientWidth, scrollWidth: root.scrollWidth, overflowPx },
      declarations: {
        workspaces: workspaces.length,
        collapsibleRegions: collapsibleRegions.length,
        replacementControls: replacementControls.length,
      },
      findings,
    };
  }, {
    mobile: options.mobile,
    minimumTouchTarget: options.minimumTouchTarget ?? 40,
  });
}
