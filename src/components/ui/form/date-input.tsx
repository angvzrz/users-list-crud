import { ChangeEvent } from 'react';

interface DateInputProps {
  name: string;
  initialValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function DateInput({ name, initialValue, onChange }: DateInputProps) {
  return (
    <label htmlFor="birth-date" className="mb-3">
      <input
        name={name}
        type="date"
        defaultValue={initialValue}
        onChange={onChange}
        className="rounded-lg border border-slate-400 p-3"
      />
    </label>
  );
}
