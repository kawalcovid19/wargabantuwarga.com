interface FormElements extends HTMLFormControlsCollection {
  keywordsInput: HTMLInputElement;
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export function SearchForm({
  onSubmitKeywords,
}: {
  onSubmitKeywords: (keywords: string) => void;
}) {
  function handleSubmit(event: React.FormEvent<UsernameFormElement>) {
    event.preventDefault();
    onSubmitKeywords(event.currentTarget.elements.keywordsInput.value);
  }

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <label htmlFor="keywordsInput" className="flex-shrink-0">
        Cari provinsi:
      </label>
      <input
        id="keywordsInput"
        type="text"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 py-2 sm:text-sm border-gray-300 border-2 rounded-md my-5 mx-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white ml-2 py-2 px-6 rounded"
      >
        Cari
      </button>
    </form>
  );
}
