import database from "../data/wbw-faq-sheets.json";

export type Databases = FaqData[];

export type FaqData = {
  readonly kategori_pertanyaan: string;
  readonly pertanyaan: string;
  readonly jawaban: string;
  readonly created_date: string;
  readonly sumber?: string;
  readonly link?: string;
  readonly published_date?: string;
};

export default database as unknown as Databases;
