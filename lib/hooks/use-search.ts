import { useState } from "react";

export function useSearch<T = unknown[]>(items: T[], fieldNames: string[]) {
  const [filteredItems, setFilteredItems] = useState<T[]>(items);
  const handleSubmitKeywords = (keywords: string) => {
    const lowerKeywords = keywords.toLowerCase();
    setFilteredItems(
      items.filter((item) => {
        const filterBy = (fieldName: keyof T) => {
          const selectedField = item[fieldName];

          if (typeof selectedField === "string") {
            return selectedField.toLowerCase().includes(lowerKeywords);
          } else {
            return false;
          }
        };

        const filterFunctions = fieldNames.map((fieldName) =>
          filterBy(fieldName as keyof T),
        );
        return filterFunctions.reduce((acc, curr) => acc || curr, false);
      }),
    );
  };
  return [filteredItems, handleSubmitKeywords] as const;
}
