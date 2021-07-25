import faqSheets from "~/data/wbw-faq-sheets.json";

export type Faqs = Faq[];

export type Faq = {
  readonly kategori_pertanyaan: string;
  readonly pertanyaan: string;
  readonly jawaban: string;
  readonly created_date: string;
  readonly sumber?: string;
  readonly link?: string;
  readonly published_date?: string;
};

export default faqSheets as unknown as Faqs;
