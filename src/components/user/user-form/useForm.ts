import { IProfileNewData, UserFullData } from '@/types';
import { useEffect, useState } from 'react';

const emptyUser: IProfileNewData = {
  user: {
    firstname: '',
    lastname: '',
    email: '',
    birth_date: '',
  },
  address: {
    street: '',
    city: '',
    country: 'DE',
    postal_code: '',
  },
};

export function useForm(user: UserFullData | undefined) {
  const [form, setForm] = useState<IProfileNewData>(emptyUser);

  useEffect(() => {
    if (user) {
      setForm({
        user: {
          firstname: user?.firstname,
          lastname: user?.lastname,
          email: user?.email,
          birth_date: user?.birth_date,
        },
        address: {
          street: user?.address?.street,
          city: user?.address?.city,
          country: user?.address?.country,
          postal_code: user?.address?.postal_code,
        },
      });
    }
  }, [user]);

  return {form, setForm};
}
