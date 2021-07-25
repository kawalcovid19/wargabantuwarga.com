import provinces from "~/data/wbw-sheets.json";

import { getSlug } from "./string-utils";

export type Provinces = Province[];

export type Province = {
  readonly id: number;
  readonly name: string;
  readonly slug: string;
  readonly data: Contact[];
};

export type Contact = {
  readonly id: string;
  readonly slug: string;
  readonly kebutuhan?: string;
  readonly keterangan?: string;
  readonly lokasi?: string;
  readonly penyedia?: string;
  readonly kontak?: string;
  readonly alamat?: string;
  readonly link?: string;
  readonly tambahan_informasi?: string;
  readonly terakhir_update?: string;
  readonly bentuk_verifikasi?: string;
  readonly verifikasi: number;
};

export type ProvincePath = {
  params: {
    provinceSlug: string;
  };
};

export const getProvincesPaths = (): ProvincePath[] => {
  const provincees = provinces as unknown as Province[];

  return provincees.map((province) => {
    const provinceSlug = province.slug;

    return {
      params: { provinceSlug },
    };
  });
};

export type ContactPath = {
  params: {
    provinceSlug: string;
    contactSlug: string;
  };
};

export const getContactsPaths = (): ContactPath[] => {
  const contactsPaths: ContactPath[] = [];
  provinces.forEach((province, provinceIndex) => {
    province.data.forEach((contact: Contact) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const provinceSlug = getSlug(province.name, provinceIndex);
      contactsPaths.push({
        params: { provinceSlug, contactSlug: contact.slug },
      });
    });
  });
  return contactsPaths;
};

export default provinces as unknown as Provinces;
