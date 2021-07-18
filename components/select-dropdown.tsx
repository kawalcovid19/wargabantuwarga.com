export function SelectDropdown({
  selectedCategory,
  setSelectedCategory,
  listOptions,
}: {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  listOptions: unknown[];
}) {
  return (
    <div className="flex flex-col pb-4">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor="kategori-pertanyaan"
        id="listbox-label"
      >
        Atau cari berdasarkan kategori pertanyaan:
      </label>
      <div className="flex items-center mt-1">
        <select
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-2 sm:text-sm border-gray-300 border-2 rounded-md"
          id="kategori-pertanyaan"
          name="kategori-pertanyaan"
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
          value={selectedCategory}
        >
          <option value="">Semua</option>
          {Object.keys(listOptions as Record<string, unknown>).map(
            (category: string) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            },
          )}
        </select>
      </div>
    </div>
  );
}
