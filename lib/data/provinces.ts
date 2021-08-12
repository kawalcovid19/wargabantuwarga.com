import provinces from "~/data/wbw-sheets.json";

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
  readonly ketersediaan?: "Tersedia" | "Tidak Tersedia";
};

export type ProvincePath = {
  params: {
    provinceSlug: string;
  };
};

export type ContactPath = {
  params: {
    provinceSlug: string;
    contactSlug: string;
  };
};

export default provinces as unknown as Provinces;
