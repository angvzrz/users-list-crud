import { DeleteButton, EditButton } from '@/components/ui';
import { AppContext } from '@/pages';
import { User } from '@/types';
import { useContext } from 'react';

interface UserRowProps {
  user: User;
}

export function UserRow({ user }: UserRowProps) {
  const { setCrudAction, setSelectedUser } = useContext(AppContext);
  const { firstname, lastname, email, birth_date } = user;
  const fullName = firstname + ' ' + lastname;

  const handleDeleteClick = () => {
    setCrudAction('user-delete');
    setSelectedUser(user);
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-6">{fullName}</td>
      <td className="px-4 py-6">{email}</td>
      <td className="px-4 py-6">{birth_date}</td>
      <td className="px-4 py-6">
        <div className="flex justify-end gap-4">
          <DeleteButton onClick={handleDeleteClick} />
          <EditButton />
        </div>
      </td>
    </tr>
  );
}
