import * as React from "react";

import {
  ChatAltIcon,
  HomeIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

export interface BottomNavigationItem {
  name: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  href: string;
  exact?: boolean;
  external?: boolean;
}

export const bottomNavigation: BottomNavigationItem[] = [
  {
    name: "Beranda",
    icon: HomeIcon,
    href: "/",
    exact: true,
  },
  {
    name: "Hotline",
    icon: ChatAltIcon,
    href: "https://wa.me/6281257579812",
    external: true,
  },
  {
    name: "Pusat Data",
    icon: SearchIcon,
    href: "/provinces",
  },
  {
    name: "FAQ",
    icon: ViewGridIcon,
    href: "/faq",
  },
];
