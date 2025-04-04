import { DeleteIcon } from './delete-icon';

interface DeleteButtonProps {
  onClick: () => void;
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button
      aria-label="Delete user"
      onClick={onClick}
      className="rounded-md p-1 text-red-500 hover:bg-zinc-200"
    >
      <DeleteIcon classes="h-6 w-6" />
    </button>
  );
}
