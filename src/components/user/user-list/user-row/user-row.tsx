import { DeleteButton, EditButton } from '@/components/ui';
import { AppContext } from '@/pages';
import { UserFullData } from '@/types';
import { useContext } from 'react';

interface UserRowProps {
  user: UserFullData;
}

export function UserRow({ user }: UserRowProps) {
  const { setCrudAction, setSelectedUser } = useContext(AppContext);
  const { firstname, lastname, email, birth_date } = user;
  const fullName = firstname + ' ' + lastname;

  const handleClick = (crudAction: string) => {
    setCrudAction(crudAction);
    setSelectedUser(user);
  };

  return (
    <tr className="hover:bg-gray-50">
      <td
        onClick={() => handleClick('user-detail')}
        className="cursor-pointer px-4 py-6 font-medium text-slate-900 hover:underline"
      >
        {fullName}
      </td>
      <td className="px-4 py-6">{email}</td>
      <td className="px-4 py-6">{birth_date}</td>
      <td className="px-4 py-6">
        <div className="flex justify-end gap-4">
          <DeleteButton onClick={() => handleClick('user-delete')} />
          <EditButton onClick={() => handleClick('user-edit')} />
        </div>
      </td>
    </tr>
  );
}
