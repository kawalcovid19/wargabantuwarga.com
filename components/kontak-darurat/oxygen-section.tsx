import React from "react";

import { Accordion } from "~/components/accordion";
import StackedLink from "~/components/stacked-link";
import { OxygenDetail } from "~/lib/oxygen-information";

type OxygenSectionProps = {
  oxygen_section: OxygenDetail[];
};

export default function OxygenSection(data: OxygenSectionProps) {
  const { oxygen_section } = data;
  return (
    <Accordion title="Oksigen Untuk Pasien COVID?">
      <div className="p-2 bg-gray-50 rounded-md">
        {oxygen_section.map((oxygen, i) => (
          <StackedLink
            key={i}
            title={oxygen.title}
            uniqId={i}
            url={oxygen.url}
          />
        ))}
      </div>
    </Accordion>
  );
}
