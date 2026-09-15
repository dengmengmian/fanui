import type { ReactNode } from 'react';
import { cn } from './utils';

export interface ResourceCardProps {
  title: string;
  description: string;
  metadata?: ReactNode;
  icon?: ReactNode;
  category?: string;
  href?: string;
  className?: string;
}

export function ResourceCard({ category, className, description, href, icon, metadata, title }: ResourceCardProps) {
  const content = (
    <>
      <div className="flex items-start gap-3">
        {icon ? <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-control bg-surface-subtle">{icon}</span> : null}
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-medium text-content">{title}</h3>
          {metadata ? <div className="mt-1 text-xs text-content-muted">{metadata}</div> : null}
        </div>
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-6 text-content-secondary">{description}</p>
      {category ? <span className="mt-4 inline-flex rounded bg-surface-subtle px-2 py-1 text-xs text-content-secondary">{category}</span> : null}
    </>
  );
  const styles = cn('block rounded-panel border border-divider bg-surface p-5 transition-colors hover:border-divider-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-focus', className);
  return href ? <a className={styles} href={href}>{content}</a> : <article className={styles}>{content}</article>;
}
