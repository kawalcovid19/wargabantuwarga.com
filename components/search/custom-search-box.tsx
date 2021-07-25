import React from "react";

import { FormGroup } from "~/components/ui/forms/form-group";
import { FormLabel } from "~/components/ui/forms/form-label";
import { InputText } from "~/components/ui/forms/input-text";

import { SearchBoxProvided } from "react-instantsearch-core";
import { connectSearchBox } from "react-instantsearch-dom";

interface CustomSearchBoxProvided extends SearchBoxProvided {
  readonly itemName: string;
  readonly placeholderText?: string;
}

function SearchBox({
  currentRefinement,
  refine,
  itemName,
  placeholderText,
}: CustomSearchBoxProvided) {
  return (
    <form className="pb-8 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end">
        <div className="flex flex-1 items-center mt-1">
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
            </FormGroup>
          </div>
        </div>
      </div>
    </form>
  );
}

export default connectSearchBox(SearchBox);
