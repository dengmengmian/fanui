import { cn } from './utils';

export interface SegmentOption<T extends string> {
  value: T;
  label: string;
  disabled?: boolean;
}

export interface SegmentedControlProps<T extends string> {
  label: string;
  value: T;
  options: ReadonlyArray<SegmentOption<T>>;
  onChange: (value: T) => void;
  className?: string;
}

export function SegmentedControl<T extends string>({ className, label, onChange, options, value }: SegmentedControlProps<T>) {
  return (
    <fieldset className={cn('inline-flex rounded-control bg-surface-subtle p-1', className)}>
      <legend className="sr-only">{label}</legend>
      {options.map((option) => (
        <label key={option.value} className="relative">
          <input
            className="peer sr-only"
            type="radio"
            name={label}
            value={option.value}
            checked={value === option.value}
            disabled={option.disabled}
            onChange={() => onChange(option.value)}
          />
          <span className="flex min-h-8 cursor-pointer items-center rounded-control px-3 text-sm text-content-secondary peer-checked:bg-surface peer-checked:text-brand peer-checked:shadow-sm peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-focus peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
            {option.label}
          </span>
        </label>
      ))}
    </fieldset>
  );
}
