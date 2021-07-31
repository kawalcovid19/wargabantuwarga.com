import React from "react";

import { Accordion } from "~/components/accordion";
import StackedLink from "~/components/stacked-link";
import { VaccineDetail } from "~/lib/vaccine-information";

type VaccineSectionProps = {
  vaccine_section: VaccineDetail[];
};

export default function VaccineSection(data: VaccineSectionProps) {
  const { vaccine_section } = data;
  return (
    <Accordion title="Mau Vaksin COVID-19?">
      <div className="p-2 bg-gray-50 rounded-md">
        {vaccine_section.map((vaccine, i) => (
          <StackedLink
            key={i}
            title={vaccine.title}
            uniqId={i}
            url={vaccine.url}
          />
        ))}
      </div>
    </Accordion>
  );
}
