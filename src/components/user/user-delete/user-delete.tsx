import { DeleteIcon } from '@/components/ui';
import { AppContext } from '@/pages';
import { deleteUser, getUsers } from '@/services/users-api';
import { useContext } from 'react';

export function UserDelete() {
  const { setUsers, setCrudAction, selectedUser } = useContext(AppContext);

  const handleCancelClick = () => {
    setCrudAction('');
  };

  const handleDeleteClick = () => {
    deleteUser(selectedUser.id)
      .then(() => getUsers().then((data) => setUsers(data)))
      .finally(() => setCrudAction(''));
  };

  return (
    <div className="flex-auto justify-center p-5 text-center">
      <DeleteIcon classes="w-h16 mx-auto flex h-16 items-center text-red-500" />
      <h2 className="py-4 text-xl font-bold">Are you sure?</h2>
      <p className="px-8 text-sm text-gray-500">
        Do you really want to delete this user? This process cannot be undone
      </p>
      <div className="mt-2 space-x-4 p-3 text-center md:block">
        <button
          onClick={handleCancelClick}
          className="mb-2 rounded-full border bg-white px-5 py-2 text-sm font-medium tracking-wider text-gray-600 shadow-sm hover:bg-gray-100 hover:shadow-lg md:mb-0"
        >
          Cancel
        </button>
        <button
          onClick={handleDeleteClick}
          className="mb-2 rounded-full border border-red-500 bg-red-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:bg-red-600 hover:shadow-lg md:mb-0"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
