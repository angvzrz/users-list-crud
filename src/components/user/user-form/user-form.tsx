import { AppContext } from '@/pages';
import { createUser, editUser, getUsers } from '@/services/users-api';
import { IProfileNewData, UserFullData } from '@/types';
import { ChangeEvent, FormEvent, useContext } from 'react';
import { UserSection } from './user-section';
import { AddressSection } from './address-section';
import { useForm } from './useForm';

interface UserFormProps {
  user?: UserFullData;
}

export function UserForm({ user }: UserFormProps) {
  const { setUsers, setCrudAction, deselectUser } = useContext(AppContext);
  const { form, setForm } = useForm(user);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const userAddressProperty: string = event.target.name;
    const inputValue: string = event.target.value;

    let profileProperty = '';

    if (form?.address) {
      profileProperty =
        userAddressProperty in form?.address ? 'address' : 'user';
    }

    setForm((prevForm) => ({
      ...prevForm,
      [profileProperty]: {
        ...prevForm[profileProperty as keyof IProfileNewData],
        [userAddressProperty]: inputValue,
      },
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (user) {
        await editUser(user?.id as number, form);
      } else {
        await createUser(form);
      }

      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      deselectUser();
      setCrudAction('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-h-1/2 flex max-w-lg flex-col gap-2 p-5"
    >
      <UserSection user={user} handleChange={handleChange} />
      <AddressSection user={user} handleChange={handleChange} />
      <button
        type="submit"
        className="mt-5 cursor-pointer rounded bg-amber-500 p-2 text-white hover:bg-amber-600"
      >
        Confirm
      </button>
    </form>
  );
}
