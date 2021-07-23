import * as React from "react";

import WhatsAppLogo from "~/components/ui/whatsapp-logo";

import {
  HomeIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
} from "@heroicons/react/solid";

export interface BottomNavigationItem {
  name: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  href: string;
  exact?: boolean;
  external?: boolean;
}

export const bottomNavigation: BottomNavigationItem[] = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
    exact: true,
  },
  {
    name: "Pencarian",
    icon: SearchIcon,
    href: "/provinces",
  },
  {
    name: "FAQ",
    icon: QuestionMarkCircleIcon,
    href: "/faq",
  },
  {
    name: "WhatsApp",
    icon: WhatsAppLogo,
    href: "https://wa.me/6281257579812",
    external: true,
  },
];
