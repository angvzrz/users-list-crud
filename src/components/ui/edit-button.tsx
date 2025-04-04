import { EditIcon } from './edit-icon';

interface EditButtonProps {
  onClick: () => void;
}

export function EditButton({ onClick }: EditButtonProps) {
  return (
    <button onClick={onClick} className="rounded-md p-1 hover:bg-zinc-200">
      <EditIcon classes="w-6 h-6" />
    </button>
  );
}
