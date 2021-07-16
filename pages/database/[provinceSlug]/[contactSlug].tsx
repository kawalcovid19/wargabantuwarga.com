import { PaperClipIcon } from "@heroicons/react/solid";

export default function Example() {
  return (
    <>
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Applicant Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="mt-5 border-t border-gray-200">
        <dl className="divide-y divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className="flex-grow">Margot Foster</span>
              <span className="ml-4 flex-shrink-0">
                <button
                  type="button"
                  className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              Application for
            </dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className="flex-grow">Backend Developer</span>
              <span className="ml-4 flex-shrink-0">
                <button
                  type="button"
                  className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className="flex-grow">margotfoster@example.com</span>
              <span className="ml-4 flex-shrink-0">
                <button
                  type="button"
                  className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              Salary expectation
            </dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className="flex-grow"> $120,000</span>
              <span className="ml-4 flex-shrink-0">
                <button
                  type="button"
                  className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <span className="flex-grow">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </span>
              <span className="ml-4 flex-shrink-0">
                <button
                  type="button"
                  className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </span>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 flex-1 w-0 truncate">
                      resume_back_end_developer.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex space-x-4">
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Update
                    </button>
                    <span className="text-gray-300" aria-hidden="true">
                      |
                    </span>
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <PaperClipIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 flex-1 w-0 truncate">
                      coverletter_back_end_developer.pdf
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex space-x-4">
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Update
                    </button>
                    <span className="text-gray-300" aria-hidden="true">
                      |
                    </span>
                    <button
                      type="button"
                      className="bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
