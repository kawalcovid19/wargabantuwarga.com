import { useMemo } from "react";

import { ExclamationCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { EmptyState } from "./ui/empty-state";
import { getProvinceMetaTitle } from "~/lib/meta";

export type ProvinceListItem = {
  initials: string;
  name: string;
  slug: string;
  count: number;
};

type ProvinceListProps = {
  data: ProvinceListItem[];
};

export function ProvinceList(props: ProvinceListProps) {
  const router = useRouter();

  const kebutuhanQuery = useMemo(
    () => (router.query.kebutuhan as string) || undefined,
    [router.query],
  );

  if (props.data.length > 0) {
    return (
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2">
        {props.data.map((province) => (
          <li
            key={province.name}
            className="col-span-1 flex shadow-sm rounded-md"
          >
            <div className="bg-blue-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">
              {province.initials}
            </div>
            <Link
              href={{
                pathname: `/provinces/${province.slug}`,
                query: {
                  ...(kebutuhanQuery ? { kebutuhan: kebutuhanQuery } : {}),
                },
              }}
            >
              <a
                className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
                title={getProvinceMetaTitle(province.name)}
              >
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <span className="text-gray-900 font-semibold hover:text-gray-600">
                    {province.name}
                  </span>
                  <p className="text-gray-500">{province.count} Entri</p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="px-4 py-12">
      <EmptyState
        description="Silakan gunakan kata kunci pencarian lainnya."
        icon={ExclamationCircleIcon}
        title="Provinsi tidak ditemukan"
      />
    </div>
  );
}
