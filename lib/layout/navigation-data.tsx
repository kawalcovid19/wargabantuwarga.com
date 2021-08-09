import * as React from "react";

import {
  ChatAltIcon,
  HomeIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import siteConfig from "../content/site-config";

export interface NavigationItem {
  name: string;
  icon: React.ComponentType<React.ComponentProps<"svg">>;
  href: string;
  exact?: boolean;
  external?: boolean;
}

export type NavMenuItem = Omit<NavigationItem, "icon">;

export const bottomNavigation: NavigationItem[] = [
  {
    name: "Beranda",
    icon: HomeIcon,
    href: "/",
    exact: true,
  },
  {
    name: "Hubungi Kami",
    icon: ChatAltIcon,
    href: siteConfig.whatsapp_contact_url,
    external: true,
  },
  {
    name: "Pusat Data",
    icon: SearchIcon,
    href: "/provinces",
  },
  {
    name: "Info Umum",
    icon: ViewGridIcon,
    href: "/faq",
  },
];

export const navMenu: NavMenuItem[] = [
  {
    name: "Beranda",
    href: "/",
    exact: true,
  },
  {
    name: "Daftar Kontak Faskes per Provinsi",
    href: "/provinces",
    exact: true,
  },
  {
    name: "Situs/Kontak Penting Terkait Covid-19",
    href: "/kontak-darurat",
  },
  {
    name: "Rumah Sakit",
    href: "/provinces?kebutuhan=Rumah%20sakit",
    exact: true,
  },
  {
    name: "Ambulans",
    href: "/provinces?kebutuhan=Ambulans",
    exact: true,
  },
  {
    name: "Info Oksigen",
    href: "/provinces?kebutuhan=Oksigen",
    exact: true,
  },
  {
    name: "Donor Plasma",
    href: "/provinces?kebutuhan=Donor%20plasma",
    exact: true,
  },
  {
    name: "Isolasi Mandiri",
    href: "/isolasi-mandiri",
  },
  {
    name: "Donasi",
    href: "/donasi",
  },
];
