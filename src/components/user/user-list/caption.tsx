import { AppContext } from '@/pages';
import { useContext } from 'react';

export function Caption() {
  const { setCrudAction } = useContext(AppContext);

  const handleClick = () => {
    setCrudAction('user-create');
  };

  return (
    <caption className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Users List</h2>
        <button
          onClick={handleClick}
          className="relative rounded bg-amber-500 p-2 text-white hover:bg-amber-600"
        >
          ADD NEW USER
        </button>
      </div>
    </caption>
  );
}
