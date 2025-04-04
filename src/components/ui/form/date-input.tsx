import { ChangeEvent } from 'react';

interface DateInputProps {
  name: string;
  initialValue: string;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function DateInput({
  name,
  initialValue,
  label,
  onChange,
}: DateInputProps) {
  return (
    <span>
      <input
        name={name}
        type="date"
        defaultValue={initialValue}
        onChange={onChange}
        className="block rounded-lg border border-slate-400 p-3"
      />
      <label htmlFor={name}>{label}</label>
    </span>
  );
}
