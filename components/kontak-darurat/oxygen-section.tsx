import React from "react";

import { StackedLinkDisclosure } from "~/components/layout/stacked-link-disclosure";
import StackedLink from "~/components/layout/stacked-link";
import { OxygenDetail } from "~/lib/kontak-darurat/oxygen-information";

type OxygenSectionProps = {
  oxygen_section: OxygenDetail[];
};

export default function OxygenSection(data: OxygenSectionProps) {
  return (
    <StackedLinkDisclosure title="Oksigen Untuk Pasien COVID?">
      <div className="p-2 bg-gray-50 rounded-md">
        <StackedLink links={data.oxygen_section} />
      </div>
    </StackedLinkDisclosure>
  );
}
