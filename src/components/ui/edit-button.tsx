import { EditIcon } from './edit-icon';

interface EditButtonProps {
  onClick: () => void;
}

export function EditButton({ onClick }: EditButtonProps) {
  return (
    <button onClick={onClick}>
      <EditIcon classes="w-6 h-6" />
    </button>
  );
}
