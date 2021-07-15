/* This example requires Tailwind CSS v2.0+ */
import { DotsVerticalIcon } from "@heroicons/react/solid";

const projects = [
  {
    name: "Graph API",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Component Design",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Templates",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
];

export default function Database() {
  return (
    <div>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Pinned Projects
      </h2>
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex shadow-sm rounded-md"
          >
            <div className="bg-blue-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">
              {project.initials}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a
                  href={project.href}
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  {project.name}
                </a>
                <p className="text-gray-500">{project.members} Members</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">Open options</span>
                  <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
