import { SelectOptions, TextInput } from '@/components/ui/form';
import { UserFullData } from '@/types';
import { ChangeEvent } from 'react';

interface AddressSectionProps {
  user?: UserFullData;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const countryCodes: string[] = ['DE', 'US', 'UK', 'ES'];

export function AddressSection({ user, handleChange }: AddressSectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="mb-3 text-3xl font-semibold text-amber-600">Address</h2>
      <TextInput
        name="street"
        type="text"
        required={true}
        initialValue={user?.address?.street ?? ''}
        onChange={handleChange}
      />
      <TextInput
        name="city"
        type="text"
        required={true}
        initialValue={user?.address?.city ?? ''}
        onChange={handleChange}
      />
      <label htmlFor="country" className="flex flex-col self-start">
        <SelectOptions
          options={countryCodes}
          name="country"
          initialValue={user?.address?.country ?? ''}
          onChange={handleChange}
        />
        <span>country</span>
      </label>
      <TextInput
        name="postal_code"
        type="text"
        initialValue={user?.address?.postal_code ?? ''}
        onChange={handleChange}
      />
    </section>
  );
}
