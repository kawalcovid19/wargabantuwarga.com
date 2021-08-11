import React from "react";

import { FilterIcon } from "@heroicons/react/outline";
import { SearchBoxProvided } from "react-instantsearch-core";
import { connectSearchBox } from "react-instantsearch-dom";
import { FormGroup } from "~/components/ui/forms/form-group";
import { FormLabel } from "~/components/ui/forms/form-label";
import { InputText } from "~/components/ui/forms/input-text";

interface CustomSearchBoxProvided extends SearchBoxProvided {
  readonly itemName: string;
  readonly placeholderText?: string;
  readonly hasFilter?: boolean;
  readonly onFilterButtonClick?: () => void;
}

function SearchBox({
  currentRefinement,
  refine,
  itemName,
  placeholderText,
  hasFilter,
  onFilterButtonClick,
}: CustomSearchBoxProvided) {
  return (
    <div className="space-y-1 flex-1">
      <FormLabel htmlFor="keywordsInput">Cari {itemName}:</FormLabel>
      <FormGroup className="w-full">
        <InputText
          autoComplete="off"
          className="focus:z-10"
          id="keywordsInput"
          isGroupItem
          onChange={(e) => refine(e.currentTarget.value)}
          placeholder={placeholderText}
          type="search"
          value={currentRefinement}
        />
        {hasFilter && onFilterButtonClick && (
          <button
            className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            onClick={(event) => {
              event.preventDefault();
              onFilterButtonClick();
            }}
          >
            <FilterIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
            <span>Filter</span>
          </button>
        )}
      </FormGroup>
    </div>
  );
}

export default connectSearchBox(SearchBox);
