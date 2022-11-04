import cheerio from "cheerio";
import {
  getKebabCase,
  stripTags,
  toSnakeCase,
  toTitleCase,
} from "./../../lib/string-utils";
import { Faq, Faqs } from "./../../lib/data/faqs";

export interface SheetColumn {
  name: string;
  index: number;
}

export const parseFAQ = async (html: string): Promise<Faqs> => {
  const $ = cheerio.load(html);
  const faqRows = $("#sheets-viewport > div#0").find(
    "table tbody tr:not(:first)",
  );

  const faqJSON: Faqs = faqRows
    .map((_, el) => {
      const row = $(el).find("td");
      const faq: Faq = {
        kategori_pertanyaan: $(row.get(0)).text(),
        pertanyaan: $(row.get(1)).text(),
        jawaban: $(row.get(2)).html() ?? "",
        created_date: $(row.get(3)).text(),
        sumber: $(row.get(4)).text(),
        link: $(row.get(5)).text(),
        published_date: $(row.get(6)).text(),
      };

      return faq;
    })
    .toArray();

  return faqJSON;
};

export const extractGoogleQuery = (value: string): string => {
  const $ = cheerio.load(value);
  const links = $("a");
  links.each((_, link): void => {
    const el = $(link);
    const href = el.attr("href");
    const url = new URL(href as string);
    const usp = new URLSearchParams(url.search);
    el.attr("href", usp.get("q"));
  });
  return $("body").html() ?? "";
};

export const contactReducer = (row: string[]) => {
  return (prev: Record<string, number | string>, col: SheetColumn) => {
    const colName = toSnakeCase(col.name);
    let cellValue = row[col.index];
    if (colName == "lokasi") {
      cellValue = toTitleCase(cellValue);
    } else if (["kontak", "link"].includes(colName)) {
      cellValue = extractGoogleQuery(cellValue);
    } else if (colName == "ketersediaan") {
      cellValue = toTitleCase(cellValue);
    } else if (colName == "alamat") {
      cellValue = stripTags(cellValue);
    }
    prev[colName] = cellValue;
    if (colName == "kontak") {
      prev.slug = [
        getKebabCase(prev.kebutuhan as string),
        getKebabCase(prev.keterangan as string),
        getKebabCase(prev.lokasi as string),
        getKebabCase(prev.penyedia as string),
        getKebabCase(stripTags(prev.kontak as string)),
      ].join("-");
    } else if (colName == "tanggal_verifikasi") {
      prev.verifikasi = cellValue == "" ? 0 : 1;
    }
    return prev;
  };
};

export const lbhReducer = (row: string[]) => {
  return (prev: Record<string, number | string>, col: SheetColumn) => {
    const colName = toSnakeCase(col.name);
    let cellValue = row[col.index];
    if (
      ["nomor_kontak", "link", "twitter", "youtube", "facebook", "ig"].includes(
        colName,
      )
    ) {
      cellValue = extractGoogleQuery(cellValue);
    } else if (["nomor_kontak", "alamat"].includes(colName)) {
      cellValue = stripTags(cellValue);
    }
    prev[colName] = cellValue;
    if (colName == "nama_lbh") {
      prev.slug = [getKebabCase(prev.nama_lbh as string)].join("-");
    }
    prev.verifikasi = 1;
    return prev;
  };
};
