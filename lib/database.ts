import database from "../data/wbw-sheets.json";
import { getSlug } from "./string-utils";

export type Database = Province[];

export type Province = {
  readonly id: number;
  readonly name: string;
  readonly data: ProvinceData[];
};

export type ProvinceData = {
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
    slug: string;
  };
};

export const getProvincesPaths = (): ProvincePath[] =>
  database.map((item, index) => {
    const slug = getSlug(item.name, index);
    return {
      params: { slug },
    };
  });

export default database as unknown as Database;
