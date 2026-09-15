import type { ReactNode } from 'react';
import { Button, type ButtonProps } from './Button';
import { cn } from './utils';

export interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: ReadonlyArray<string>;
  highlighted?: boolean;
  badge?: string;
  action?: ReactNode;
  actionLabel?: string;
  onAction?: ButtonProps['onClick'];
  className?: string;
}

export function PricingCard({ action, actionLabel = '选择方案', badge, className, description, features, highlighted = false, name, onAction, period, price }: PricingCardProps) {
  return (
    <article className={cn('flex h-full flex-col rounded-feature border p-6', highlighted ? 'border-brand bg-brand text-on-brand' : 'border-divider bg-surface text-content', className)}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        {badge ? <span className={cn('rounded px-2 py-1 text-xs', highlighted ? 'bg-white/15' : 'bg-selection text-on-selection')}>{badge}</span> : null}
      </div>
      {description ? <p className={cn('mt-3 text-sm', highlighted ? 'text-on-brand/80' : 'text-content-secondary')}>{description}</p> : null}
      <p className="mt-6"><span className="text-4xl font-semibold tracking-tight">{price}</span>{period ? <span className={cn('ml-2 text-sm', highlighted ? 'text-on-brand/80' : 'text-content-muted')}>{period}</span> : null}</p>
      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {features.map((feature) => <li key={feature} className="flex gap-2"><span aria-hidden="true">✓</span><span>{feature}</span></li>)}
      </ul>
      <div className="mt-6">{action ?? <Button className="w-full" variant={highlighted ? 'secondary' : 'primary'} onClick={onAction}>{actionLabel}</Button>}</div>
    </article>
  );
}
