import { ChangeEvent } from 'react';

interface InputProps {
  name: string;
  type: 'text' | 'email';
  initialValue?: string;
  required?: boolean;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({
  name,
  type,
  initialValue,
  required,
  label,
  onChange,
}: InputProps) {
  return (
    <label htmlFor={name}>
      <input
        name={name}
        type={type}
        defaultValue={initialValue}
        required={required}
        onChange={onChange}
        className="w-full rounded-lg border border-slate-400 p-3"
      />
      <span>{label}</span>
    </label>
  );
}
