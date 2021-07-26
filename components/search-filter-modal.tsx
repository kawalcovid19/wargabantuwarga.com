/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ChangeEventHandler, Fragment, useRef } from "react";

import { SearchFilter } from "~/components/search-filter";

import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";

export interface SortSetting {
  value: string;
  label: string;
}

export interface SearchFilterModalProps {
  checkDocSize?: boolean;
  filters: any;
  filterItems?: {};
  isLoading?: boolean;
  isOpen: boolean;
  handleFilterChange: ChangeEventHandler<HTMLSelectElement>;
  handleSortChange: ChangeEventHandler<HTMLSelectElement>;
  onToggle: (value: boolean) => void;
  sortBy: string;
  sortSettings?: SortSetting[];
}

export function SearchFilterModal({
  checkDocSize,
  filters,
  filterItems,
  isLoading,
  isOpen,
  onToggle,
  handleFilterChange,
  handleSortChange,
  sortBy,
  sortSettings,
}: SearchFilterModalProps) {
  const closeButtonRef = useRef(null);

  return (
    <Transition.Root as={Fragment} show={isOpen}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        initialFocus={closeButtonRef}
        onClose={onToggle}
        open={isOpen}
        static
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
            <div className="inline-block align-bottom w-full bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:p-6">
              <div className="block absolute top-0 right-0 pt-5 pr-4 sm:pt-6 sm:pr-6">
                <button
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => onToggle(false)}
                  ref={closeButtonRef}
                  type="button"
                >
                  <span className="sr-only">Close</span>
                  <XIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="w-full">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Filter
                  </Dialog.Title>
                  <div className="mt-4 space-y-4">
                    <SearchFilter
                      checkDocSize={checkDocSize}
                      filterItems={filterItems}
                      filters={filters}
                      handleFilterChange={handleFilterChange}
                      handleSortChange={handleSortChange}
                      isLoading={isLoading}
                      sortBy={sortBy}
                      sortSettings={sortSettings}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
