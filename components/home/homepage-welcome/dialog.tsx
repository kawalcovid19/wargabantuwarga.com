import { Fragment } from "react";

import { PrimaryButton } from "../button";

import { Dialog, Transition } from "@headlessui/react";

interface BasicDialogProps {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  description: React.ReactNode;
}

export function BasicDialog({
  isOpen,
  onToggle,
  title,
  description,
}: BasicDialogProps) {
  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={() => onToggle()}
        open={isOpen}
        static
      >
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            aria-hidden="true"
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom w-full bg-white rounded-lg px-4 pt-5 pb-4 mx-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:p-6">
              <Dialog.Title className="text-gray-700 text-xl">
                {title}
              </Dialog.Title>
              <Dialog.Description className="text-gray-700 text-sm my-4">
                {description}
              </Dialog.Description>

              <PrimaryButton
                className="w-full"
                onClick={() => onToggle()}
                rounded
              >
                Sebarkan Sekarang
              </PrimaryButton>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
