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
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-3 text-3xl font-semibold text-amber-600">Address</legend>
      <TextInput
        name="city"
        type="text"
        required={true}
        label="City"
        initialValue={user?.address?.city ?? ''}
        onChange={handleChange}
      />
      <TextInput
        name="street"
        type="text"
        required={true}
        label="Street"
        initialValue={user?.address?.street ?? ''}
        onChange={handleChange}
      />
      <label htmlFor="country" className="flex flex-col self-start">
        <SelectOptions
          options={countryCodes}
          name="country"
          initialValue={user?.address?.country ?? ''}
          onChange={handleChange}
        />
        <span>Country</span>
      </label>
      <TextInput
        name="postal_code"
        type="text"
        initialValue={user?.address?.postal_code ?? ''}
        label="Zip Code"
        onChange={handleChange}
      />
    </fieldset>
  );
}
