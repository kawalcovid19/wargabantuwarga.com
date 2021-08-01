import { useMemo } from "react";

import { EmptyState } from "~/components/ui/empty-state";
import { ContactListSkeleton } from "~/components/ui/skeleton-loading";
import { Contact } from "~/lib/data/provinces";

import { ContactListItem } from "./contact-list-item";

import { ExclamationCircleIcon } from "@heroicons/react/outline";

type ContactListProps = {
  data: Contact[];
  provinceSlug: string;
  provinceName: string;
  isLoading: boolean;
};

export function ContactList(props: ContactListProps) {
  const contactList = useMemo(
    () => (
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {props.data.map((contact, index) => (
            <ContactListItem
              key={index}
              contact={contact}
              provinceName={props.provinceName}
              provinceSlug={props.provinceSlug}
            />
          ))}
        </ul>
      </div>
    ),
    [props.data, props.provinceName, props.provinceSlug],
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
