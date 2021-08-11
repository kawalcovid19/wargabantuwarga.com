import { Fragment, useRef } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { ShareIcon, XIcon } from "@heroicons/react/solid";
import htmr from "htmr";
import { htmrTransform } from "~/lib/htmr-transformers";
import { PrimaryButton } from "~/components/ui/button";

interface BasicDialogProps {
  isOpen: boolean;
  onToggle: () => void;
  onCtaClick: () => void;
  title: string;
  description: string;
}

export function BasicDialog({
  isOpen,
  onCtaClick,
  onToggle,
  title,
  description,
}: BasicDialogProps) {
  const ctaButtonRef = useRef(null);

  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        initialFocus={ctaButtonRef}
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
              <div className="flex justify-between items-center align-center mb-4">
                <Dialog.Title className="text-gray-700 text-xl">
                  {title}
                </Dialog.Title>

                <button
                  aria-label="Tutup"
                  className="flex justify-center items-center align-center h-6 w-6 text-gray-500"
                  onClick={() => onToggle()}
                  type="button"
                >
                  <XIcon />
                </button>
              </div>

              <Dialog.Description as="div" className="prose prose-sm mb-4">
                {htmr(description, { transform: htmrTransform })}
              </Dialog.Description>

              <PrimaryButton
                aria-label="Sebarkan sekarang"
                className="w-full mt-2"
                icon={ShareIcon}
                onClick={() => onCtaClick()}
                ref={ctaButtonRef}
                rounded
                type="button"
              >
                Sebarkan sekarang
              </PrimaryButton>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
