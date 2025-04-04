import { DeleteIcon } from './delete-icon';

interface DeleteButtonProps {
  onClick: () => void;
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button onClick={onClick} className='p-1 rounded-md text-red-500 hover:bg-zinc-200'>
      <DeleteIcon classes="h-6 w-6" />
    </button>
  );
}
