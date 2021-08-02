import { ComponentProps, ComponentType } from "react";

import { ClipboardListIcon } from "@heroicons/react/outline";
import { DonorIcon } from "~/components/ui/icons";

export interface ContributingLinkItem {
  title: string;
  description?: string;
  link: string;
  icon: ComponentType<ComponentProps<"svg">>;
}

export const contributingLinks: ContributingLinkItem[] = [
  {
    title: "Daftar Donor Darah",
    description:
      "Berdonor darah plasma konvalesen (hanya diisi oleh calon pendonor)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScDShI4BtBcA3dgMJhCJPs2fBl5wXoaR7kMspapNZdYKFOugA/viewform",
    icon: DonorIcon,
  },
  {
    title: "Daftar Jadi Relawan",
    description:
      "Gabung jadi relawan untuk mengumpulkan data dan menjawab pertanyaan warga via hotline",
    link: "https://www.indorelawan.org/activity/60e2ed45164da80018b0e246",
    icon: ClipboardListIcon,
  },
];
