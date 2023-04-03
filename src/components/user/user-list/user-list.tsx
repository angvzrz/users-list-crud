import { User, UserFullData } from '@/types';
import { useEffect, useState } from 'react';
import { Caption } from './caption';
import { UserRow } from './user-row/user-row';

interface UserListProps {
  users: UserFullData[];
}

export function UserList({ users }: UserListProps) {
  const [userRows, setUserRows] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const rows: JSX.Element[] = users.map((user) => (
      <UserRow key={user.id} user={user} />
    ));
    setUserRows(rows);
  }, [users]);

  return (
    <table className="w-full border-collapse border-gray-200 bg-white text-left shadow-2xl">
      <Caption />
      <thead className="m-5 overflow-hidden rounded-lg bg-gray-50">
        <tr>
          <th scope="col" className="px-4 py-6">
            Name
          </th>
          <th scope="col" className="px-4 py-6">
            Email
          </th>
          <th scope="col" className="px-4 py-6">
            Birth Date
          </th>
          <th scope="col" className="px-4 py-6"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        {userRows}
      </tbody>
    </table>
  );
}
