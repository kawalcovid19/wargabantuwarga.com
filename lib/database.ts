import database from "../data/wbw-sheets.json";
import { getSlug } from "./string-utils";

export type Database = Province[];

export type Province = {
  readonly id: number;
  readonly name: string;
  readonly data: Contact[];
};

export type Contact = {
  readonly kebutuhan?: string;
  readonly keterangan?: string;
  readonly penyedia?: string;
  readonly kontak?: string;
  readonly alamat?: string;
  readonly tautan?: string;
  readonly tambahan_informasi?: string;
  readonly tanggal_verifikasi?: string;
  readonly bentuk_verifikasi?: string;
};

export type ProvincePath = {
  params: {
    provinceSlug: string;
  };
};

export const getProvincesPaths = (): ProvincePath[] =>
  database.map((item, index) => {
    const provinceSlug = getSlug(item.name, index);
    return {
      params: { provinceSlug },
    };
  });

export type ContactPath = {
  params: {
    provinceSlug: string;
    contactSlug: string;
  };
};

export const getContactsPaths = (): ContactPath[] => {
  const contactsPaths: ContactPath[] = [];
  database.forEach((province, provinceIndex) => {
    province.data.forEach((_, contactIndex) => {
      const provinceSlug = getSlug(province.name, provinceIndex);
      contactsPaths.push({
        params: { provinceSlug, contactSlug: contactIndex.toString() },
      });
    });
  });
  return contactsPaths;
};

export default database as unknown as Database;
