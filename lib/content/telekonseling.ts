import telekonseling from "~/_content/telekonseling/telekonseling.json";

export type Konselings = Konseling[];

export type Konseling = {
  readonly telekonselings: TelekonselingDetail[];
};

export type TelekonselingDetail = {
  readonly penyelenggara: string;
  readonly jenislayanan: string;
  readonly kontak: string;
  readonly url: string;
};

export default telekonseling as unknown as Konseling;
