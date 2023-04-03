import { AppContext } from '@/pages';
import { useContext, useEffect, useState } from 'react';

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  const { setCrudAction, deselectUser } = useContext(AppContext);

  const handleCloseClick = () => {
    deselectUser();
    setCrudAction('');
  };

  useEffect(() => {
    setIsContentLoaded(true);
  }, [children]);

  return (
    <dialog
      className="fixed inset-0 z-0 flex h-auto w-full  border-none bg-black bg-opacity-80 "
      aria-modal="true"
    >
      <div className="z-99 mx-auto my-auto max-w-lg rounded-xl bg-white p-5 shadow-lg">
        <div onClick={handleCloseClick} className="relative h-8 w-full">
          <span className="absolute right-0 top-0 cursor-pointer text-4xl">
            &times;
          </span>
        </div>
        {isContentLoaded && children}
      </div>
    </dialog>
  );
}
