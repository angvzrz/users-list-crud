import { DateInput, TextInput } from '@/components/ui/form';
import { UserFullData } from '@/types';
import { ChangeEvent } from 'react';

interface UserSectionProps {
  user?: UserFullData;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function UserSection({ user, handleChange }: UserSectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="mb-4 text-3xl font-semibold text-amber-600">User</h2>
      <div className="flex w-full gap-2">
        <TextInput
          name="firstname"
          type="text"
          required={true}
          initialValue={user?.firstname ?? ''}
          onChange={handleChange}
        />
        <TextInput
          name="lastname"
          type="text"
          required={true}
          initialValue={user?.lastname ?? ''}
          onChange={handleChange}
        />
      </div>
      <TextInput
        name="email"
        type="email"
        required={true}
        initialValue={user?.email ?? ''}
        onChange={handleChange}
      />
      <DateInput
        name="birth_date"
        initialValue={user?.birth_date as string}
        onChange={handleChange}
      />
    </section>
  );
}
