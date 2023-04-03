import { ChangeEvent, useEffect, useState } from 'react';

interface InputProps {
  name: string;
  type: 'text' | 'email';
  initialValue?: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({
  name,
  type,
  initialValue,
  required,
  onChange,
}: InputProps) {
  return (
    <label htmlFor={name} className="">
      <input
        name={name}
        type={type}
        defaultValue={initialValue}
        required={required}
        onChange={onChange}
        className="w-full rounded-lg border border-slate-400 p-3"
      />
      <span>{name}</span>
    </label>
  );
}
