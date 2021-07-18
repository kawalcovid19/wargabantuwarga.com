interface FormElements extends HTMLFormControlsCollection {
  keywordsInput: HTMLInputElement;
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export function SearchForm({
  itemName,
  onSubmitKeywords,
}: {
  itemName: string;
  onSubmitKeywords: (keywords: string) => void;
}) {
  function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
    event.preventDefault();
    onSubmitKeywords(event.currentTarget.elements.keywordsInput.value);
  }

  return (
    <form className="flex flex-col pb-4" onSubmit={handleSubmit}>
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
          type="text"
        />
        <button
          className="bg-blue-600 text-white ml-2 py-2 px-6 rounded"
          type="submit"
        >
          Cari
        </button>
      </div>
    </form>
  );
}
