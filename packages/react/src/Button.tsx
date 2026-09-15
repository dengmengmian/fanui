import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from './utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  busy?: boolean;
  leadingIcon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
}

const variants = {
  primary: 'bg-brand text-on-brand hover:bg-brand-hover active:bg-brand-active',
  secondary: 'border border-divider bg-surface text-content hover:bg-surface-subtle',
  ghost: 'bg-transparent text-content hover:bg-surface-subtle',
  danger: 'bg-danger text-white hover:opacity-90',
} as const;

export function Button({ busy = false, children, className, disabled, leadingIcon, type = 'button', variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      aria-busy={busy || undefined}
      disabled={disabled || busy}
      className={cn(
        'inline-flex min-h-10 items-center justify-center gap-2 rounded-control px-4 text-sm font-medium transition-colors duration-150',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    >
      {leadingIcon ? <span aria-hidden="true" className="shrink-0">{leadingIcon}</span> : null}
      {children}
    </button>
  );
}
