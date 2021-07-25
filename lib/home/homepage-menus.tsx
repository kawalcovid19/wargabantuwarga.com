import React from "react";

import { HospitalIcon } from "~/components/ui/icons";

import { SunIcon, TruckIcon, UserAddIcon } from "@heroicons/react/outline";
import { UrlObject } from "url";

export interface HomepageMenuItem {
  name: string;
  href: UrlObject | string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
}

export const homepageMenus: HomepageMenuItem[] = [
  {
    name: "Rumah Sakit",
    href: "/provinces?kebutuhan=Rumah%20sakit",
    icon: HospitalIcon,
  },
  {
    name: "Ambulans",
    href: "/provinces?kebutuhan=Ambulans",
    icon: TruckIcon,
  },
  {
    name: "Info Oksigen",
    href: "/provinces?kebutuhan=Oksigen",
    icon: SunIcon,
  },
  {
    name: "Donor Plasma",
    href: "/provinces?kebutuhan=Donor%20plasma",
    icon: UserAddIcon,
  },
];
