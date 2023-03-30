import { DeleteIcon } from './delete-icon';

interface DeleteButtonProps {
  onClick: () => void;
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button onClick={onClick}>
      <DeleteIcon classes="h-6 w-6" />
    </button>
  );
}
