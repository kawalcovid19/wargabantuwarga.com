/* This example requires Tailwind CSS v2.0+ */
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { GetStaticProps } from "next";
import provinces from "../../lib/provinces";
import { getInitial, getSlug } from "../../lib/string-utils";
import Link from "next/link";
import { SearchForm } from "../../components/search-form";
import { useState } from "react";

type ProvinceListItem = {
  initials: string;
  name: string;
  slug: string;
  count: number;
};

type ProvincesPageProps = {
  provincesList: ProvinceListItem[];
};

export default function ProvincesPage(props: ProvincesPageProps) {
  const [filteredProvinces, setFilteredProvinces] = useState(
    props.provincesList
  );
  const handleSubmitKeywords = (keywords: string) => {
    const provinces = props.provincesList.filter((province) => {
      return province.name.toLowerCase().includes(keywords.toLowerCase());
    });
    console.log({ keywords, provinces });
    setFilteredProvinces(provinces);
  };
  return (
    <div>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Daftar Provinsi
      </h2>
      <SearchForm onSubmitKeywords={handleSubmitKeywords} />
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProvinces.map((province) => (
          <li
            key={province.name}
            className="col-span-1 flex shadow-sm rounded-md"
          >
            <div className="bg-blue-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">
              {province.initials}
            </div>
            <Link href={`/provinces/${province.slug}`}>
              <a className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <span className="text-gray-900 font-medium hover:text-gray-600">
                    {province.name}
                  </span>
                  <p className="text-gray-500">{province.count} Entri</p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const provincesList = provinces.map(({ name, data }, index) => ({
    initials: getInitial(name),
    name,
    slug: getSlug(name, index),
    count: data.length,
  }));
  provincesList.shift();
  return {
    props: {
      provincesList,
    },
  };
};
