import React from "react";

import { StackedLinkDisclosure } from "~/components/layout/stacked-link-disclosure";
import StackedLink from "~/components/layout/stacked-link";
import { VaccineDetail } from "~/lib/kontak-darurat/vaccine-information";

type VaccineSectionProps = {
  vaccine_section: VaccineDetail[];
};

export default function VaccineSection(data: VaccineSectionProps) {
  return (
    <StackedLinkDisclosure title="Mau Vaksin COVID-19?">
      <div className="p-2 bg-gray-50 rounded-md">
        <StackedLink links={data.vaccine_section} />
      </div>
    </StackedLinkDisclosure>
  );
}
