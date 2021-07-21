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
    <div className="space-y-1">
      <div className=" animate-pulse h-8 bg-gray-300 rounded w-2/5" />
    </div>
  );
};
