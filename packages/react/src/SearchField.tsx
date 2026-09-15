import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import { cn } from './utils';

export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  label: string;
  onChange: (value: string) => void;
  leadingIcon?: ReactNode;
}

export function SearchField({ className, label, leadingIcon, onChange, ...props }: SearchFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value);
  return (
    <label className={cn('flex min-h-10 items-center gap-2 rounded-control border border-divider bg-surface px-3 text-content-secondary', className)}>
      {leadingIcon ? <span aria-hidden="true" className="shrink-0">{leadingIcon}</span> : null}
      <span className="sr-only">{label}</span>
      <input
        type="search"
        aria-label={label}
        onChange={handleChange}
        className="min-w-0 flex-1 bg-transparent text-sm text-content outline-none placeholder:text-content-muted"
        {...props}
      />
    </label>
  );
}
