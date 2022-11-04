import { useMemo } from "react";

import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { LawFirmListItem } from "./law-firm-list-item";
import { EmptyState } from "~/components/ui/empty-state";
import { ContactListSkeleton } from "~/components/ui/skeleton-loading";
import { LawFirm } from "~/lib/data/law-firms";

type LawFirmListProps = {
  data: LawFirm[];
  isLoading?: boolean;
};

export function LawFirmList(props: LawFirmListProps) {
  const contactList = useMemo(
    () => (
      <div
        className="bg-white shadow overflow-hidden rounded-md"
        data-testid="contact-list"
      >
        <ul className="divide-y divide-gray-200">
          {props.data.map((lawFirm) => (
            <LawFirmListItem key={lawFirm.id} lawFirm={lawFirm} />
          ))}
        </ul>
      </div>
    ),
    [props.data],
  );

  if (props.isLoading) {
    return <ContactListSkeleton />;
  }

  if (props.data.length > 0) {
    return contactList;
  }

  return (
    <div className="px-4 py-12">
      <EmptyState
        description="Silakan gunakan kata kunci pencarian lainnya."
        icon={ExclamationCircleIcon}
        title="Fasilitas tidak ditemukan"
      />
    </div>
  );
}
