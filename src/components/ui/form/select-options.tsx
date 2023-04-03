import { ChangeEvent, useEffect, useState } from 'react';

interface SelectProps {
  options: string[];
  name: string;
  initialValue?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export function SelectOptions({
  options,
  name,
  initialValue,
  onChange,
}: SelectProps) {
  return (
    <select
      name={name}
      defaultValue={initialValue}
      onChange={onChange}
      className="rounded-lg border border-slate-400 p-3"
    >
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
}
