import { ChangeEvent } from "react";

import { FormLabel } from "~/components/ui/forms/form-label";
import { InputSelect } from "~/components/ui/forms/input-select";

import {
  connectRefinementList,
  RefinementListProvided,
} from "react-instantsearch-core";

interface CustomRefinementListProvided extends RefinementListProvided {
  readonly title: string;
}

function RefinementList({
  title,
  items,
  currentRefinement,
  refine,
}: CustomRefinementListProvided) {
  function handleFilterChange(event: ChangeEvent<HTMLSelectElement>) {
    const filterValue = event.target.value;
    if (filterValue) {
      refine([filterValue]);
    } else {
      refine([]);
    }
  }

  return (
    <div className="space-y-1">
      <FormLabel>{title}</FormLabel>
      <InputSelect
        onChange={handleFilterChange}
        value={currentRefinement.length ? currentRefinement[0] : ""}
      >
        <option value="">Semua</option>
        {items.map((item) => (
          <option key={item.label}>{item.label}</option>
        ))}
      </InputSelect>
    </div>
  );
}

export default connectRefinementList(RefinementList);
