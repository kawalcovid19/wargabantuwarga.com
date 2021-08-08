import { useRef } from "react";

import { useVirtual } from "react-virtual";
import { ExclamationCircleIcon } from "@heroicons/react/outline";
import { ContactListItem } from "./contact-list-item";
import { EmptyState } from "~/components/ui/empty-state";
import { ContactListSkeleton } from "~/components/ui/skeleton-loading";
import { Contact } from "~/lib/data/provinces";

type ContactListProps = {
  data: Contact[];
  provinceSlug: string;
  provinceName: string;
  isLoading: boolean;
};

export function ContactList(props: ContactListProps) {
  const virtualListContainerRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtual({
    size: props.data.length,
    parentRef: virtualListContainerRef,
  });

  if (props.isLoading) {
    return <ContactListSkeleton />;
  }

  if (props.data.length > 0) {
    return (
      <div
        className="bg-white shadow sm:rounded-md max-h-screen relative overflow-y-auto overflow-x-hidden"
        ref={virtualListContainerRef}
      >
        <ul
          className="divide-y divide-gray-200"
          style={{
            height: `${virtualizer.totalSize}px`,
          }}
        >
          {virtualizer.virtualItems.map((virtualRow) => {
            const contact: Contact = props.data[virtualRow.index];

            return (
              <ContactListItem
                key={contact.id}
                className="absolute top-0 left-0 w-full"
                contact={contact}
                provinceName={props.provinceName}
                provinceSlug={props.provinceSlug}
                ref={virtualRow.measureRef}
                style={{
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              />
            );
          })}
        </ul>
      </div>
    );
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
