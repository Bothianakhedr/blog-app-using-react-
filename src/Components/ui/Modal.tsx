import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { type ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  title:string
};

export const Modal = ({ isOpen, closeModal, children ,title }: ModalProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none "
        onClose={closeModal}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto  bg-black/40 backdrop-blur-sm transition-all duration-300">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl  p-6 bg-white shadow-md  duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-black mb-5"
              >
                {title}
              </DialogTitle>

              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
