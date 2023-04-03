import { useEffect, useState } from 'react';

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsContentLoaded(true);
  }, [children]);

  return (
    <dialog
      className="fixed inset-0 z-0 flex h-auto w-full  border-none bg-black bg-opacity-80 "
      aria-modal="true"
    >
      {isContentLoaded && (
        <div className="z-99 mx-auto my-auto max-w-lg rounded-xl bg-white p-5 shadow-lg">
          {children}
        </div>
      )}
    </dialog>
  );
}
