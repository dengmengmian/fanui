import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const evidencePath = resolve(
  process.env.FANUI_EVIDENCE_PATH ?? "test-results/fanui-review-evidence.json",
);

const hash = (value) => createHash("sha256").update(value).digest("hex");

export default class FanUIReporter {
  constructor() {
    this.cases = [];
    this.startedAt = new Date().toISOString();
  }

  async onTestEnd(test, result) {
    const evidenceAttachment = result.attachments.find(
      (attachment) => attachment.name === "fanui-review-evidence",
    );
    let evidence = null;
    if (evidenceAttachment) {
      try {
        const content = evidenceAttachment.body
          ?? (evidenceAttachment.path ? await readFile(evidenceAttachment.path) : Buffer.from("{}"));
        evidence = JSON.parse(content.toString("utf8"));
      } catch (error) {
        evidence = { evidenceParseError: String(error) };
      }
    }

    const screenshots = [];
    for (const attachment of result.attachments.filter((item) => item.contentType === "image/png")) {
      try {
        const content = attachment.body
          ?? (attachment.path ? await readFile(attachment.path) : undefined);
        if (!content) continue;
        screenshots.push({
          name: attachment.name,
          path: attachment.path ?? null,
          sha256: hash(content),
          bytes: content.byteLength,
        });
      } catch (error) {
        screenshots.push({ name: attachment.name, hashError: String(error) });
      }
    }

    this.cases.push({
      id: test.id,
      title: test.titlePath().join(" > "),
      project: test.parent.project()?.name ?? null,
      status: result.status,
      durationMs: result.duration,
      retry: result.retry,
      evidence,
      evidenceAttached: Boolean(evidenceAttachment),
      screenshots,
      errors: result.errors.map((error) => error.message),
    });
  }

  async onEnd(result) {
    this.cases.sort((left, right) => `${left.project}:${left.title}`.localeCompare(`${right.project}:${right.title}`));
    const passed = this.cases.filter((item) => item.status === "passed").length;
    const failed = this.cases.filter((item) => !["passed", "skipped"].includes(item.status)).length;
    const payload = {
      schemaVersion: "fanui-review-evidence/v1",
      targetURL: process.env.FANUI_TARGET_URL ?? "builtin:pass.html",
      startedAt: this.startedAt,
      finishedAt: new Date().toISOString(),
      status: result.status,
      summary: {
        cases: this.cases.length,
        passed,
        failed,
        skipped: this.cases.filter((item) => item.status === "skipped").length,
      },
      cases: this.cases,
      evidenceSha256: hash(JSON.stringify(this.cases)),
    };

    await mkdir(dirname(evidencePath), { recursive: true });
    await writeFile(evidencePath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    process.stdout.write(`FanUI review evidence: ${evidencePath}\n`);
  }
}
