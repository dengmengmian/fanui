import type { DetailsHTMLAttributes, ReactNode } from 'react';
import { cn } from './utils';

export interface DisclosureProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  summary: ReactNode;
}

export function Disclosure({ children, className, summary, ...props }: DisclosureProps) {
  return (
    <details className={cn('group border-b border-divider py-1', className)} {...props}>
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 rounded-control px-2 text-sm font-medium text-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus">
        {summary}
        <span aria-hidden="true" className="text-content-muted transition-transform group-open:rotate-180">⌄</span>
      </summary>
      <div className="px-2 pb-4 pt-2 text-sm leading-6 text-content-secondary">{children}</div>
    </details>
  );
}
