import { DeleteButton, EditButton } from '@/components/ui';
import { CrudActionContext } from '@/pages';
import { useContext } from 'react';

interface UserRowProps {
  fullName: string;
  email: string;
  birthDate: string;
}

export function UserRow({ fullName, email, birthDate }: UserRowProps) {
  const { setCrudAction } = useContext(CrudActionContext);

  const handleDeleteClick = () => {
    setCrudAction('user-delete');
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-6">{fullName}</td>
      <td className="px-4 py-6">{email}</td>
      <td className="px-4 py-6">{birthDate}</td>
      <td className="px-4 py-6">
        <div className="flex justify-end gap-4">
          <DeleteButton onClick={handleDeleteClick} />
          <EditButton />
        </div>
      </td>
    </tr>
  );
}
