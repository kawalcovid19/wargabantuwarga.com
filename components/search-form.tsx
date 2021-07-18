import { ChangeEvent, useState } from "react";

interface FormElements extends HTMLFormControlsCollection {
  keywordsInput: HTMLInputElement;
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export function SearchForm({
  itemName,
  onSubmitKeywords,
  filterItems,
}: {
  itemName: string;
  onSubmitKeywords: (keywords: string, filters?: any) => void;
  filterItems?: {};
}) {
  const [keywords, setKeywords] = useState<string>("");
  const [filters, setFilters] = useState<any>({});

  function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
    event.preventDefault();
    onSubmitKeywords(keywords, filters);
  }

  function handleReset() {
    setKeywords("");
    setFilters({});
    onSubmitKeywords("");
  }

  function handleKeywordsChange(event: ChangeEvent<HTMLInputElement>) {
    const newKeywords = event.target.value;
    setKeywords(newKeywords);
    //onSubmitKeywords(newKeywords, filters);
  }
  function handleFilterChange(event: ChangeEvent<HTMLSelectElement>) {
    const newFilters = { ...filters };
    const filterName = event.target.name;
    const filterValue = event.target.value;
    if (filterValue) {
      newFilters[filterName] = [filterValue];
    } else {
      newFilters[filterName] = [];
    }
    setFilters(newFilters);
    onSubmitKeywords(keywords, newFilters);
  }

  return (
    <form
      className="flex flex-col pb-4"
      onReset={handleReset}
      onSubmit={handleSubmit}
    >
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor="keywordsInput"
      >
        Cari {itemName}:
      </label>
      <div className="flex items-center mt-1">
        <input
          autoComplete="off"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-2 sm:text-sm border-gray-300 border-2 rounded-md"
          id="keywordsInput"
          onChange={handleKeywordsChange}
          type="text"
        />
        <button
          className="bg-blue-600 text-white ml-2 py-2 px-6 rounded"
          type="submit"
        >
          Cari
        </button>
        <button
          className="bg-gray-200 text-black ml-2 py-2 px-6 rounded"
          type="reset"
        >
          Reset
        </button>
      </div>
      {filterItems && Object.keys(filterItems).length ? (
        <div className="mt-3 text-sm">
          <span className="block mb-2 font-medium text-gray-700">Filter</span>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(filterItems).map(([key, value], idx) => {
              const { title, buckets }: any = value;
              return (
                <div key={`filter-${idx}`}>
                  <label
                    className="block mb-1 font-medium text-gray-700"
                    htmlFor={`filter-${key}`}
                  >
                    {title}
                  </label>
                  <select
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-2 sm:text-sm border-gray-300 border-2 rounded-md"
                    name={key}
                    onChange={handleFilterChange}
                  >
                    <option value="">Semua</option>
                    {buckets.map((bucket: any, bIdx: number) => {
                      return (
                        <option
                          key={`option-${key}-${bIdx + 1}`}
                          value={bucket.key}
                        >
                          {bucket.key}
                        </option>
                      );
                    })}
                  </select>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </form>
  );
}
