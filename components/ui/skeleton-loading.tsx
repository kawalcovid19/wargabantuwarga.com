export const ContactListSkeleton = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        <li>
          <div className="px-4 py-4 sm:px-6 relative">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-300 rounded w-1/4" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-2/4" />
                  <div className="h-4 bg-gray-300 rounded w-2/4" />
                  <div className="h-8 bg-gray-300 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export const SelectSkeleton = () => {
  return (
    <div className="space-y-1 animate-pulse">
      <div className="h-5 w-2/5 bg-gray-300 rounded" />
      <div className="h-8 bg-gray-300 rounded w-full" />
    </div>
  );
};

export const FaqListSkeleton = () => {
  return (
    <div className="p-4 bg-white shadow overflow-hidden rounded-md">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex justify-end items-center"
        >
          <div className="w-5/6 border-t border-gray-300" />
        </div>
        <div className="relative flex items-center">
          <span className="rounded animate-pulse h-6 w-12 md:h-6 md:w-20 bg-gray-300" />
        </div>
      </div>
      <dl className="divide-y divide-gray-200">
        <div className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
          <dt className="md:col-span-5 animate-pulse h-20 w-64 md:h-32 md:w-44 bg-gray-300 rounded" />

          <dd className="mt-2 md:mt-0 md:col-span-7 space-y-2">
            <p className="animate-pulse h-32 w-72 bg-gray-300 rounded" />
            <p className="animate-pulse h-28 w-64 bg-gray-300 rounded" />
            <div className="animate-pulse h-4 w-24 bg-gray-300 rounded" />
          </dd>
        </div>
      </dl>
    </div>
  );
};
