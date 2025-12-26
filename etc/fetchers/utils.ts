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

export interface ParsedCSV {
  headers: string[];
  rows: string[][];
}

export const parseFAQFromCSV = (csvText: string): Faqs => {
  const { rows } = parseCSV(csvText);

  return rows
    .filter((row) => row.some((cell) => cell)) // Skip empty rows
    .map((row) => {
      const faq: Faq = {
        kategori_pertanyaan: row[0] ?? "",
        pertanyaan: row[1] ?? "",
        jawaban: row[2] ?? "",
        created_date: row[3] ?? "",
        sumber: row[4] ?? "",
        link: row[5] ?? "",
        published_date: row[6] ?? "",
      };

      return faq;
    });
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
      [
        "nomor_kontak",
        "website",
        "link",
        "twitter",
        "youtube",
        "facebook",
        "ig",
      ].includes(colName)
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

/**
 * Parse CSV data, handling quoted values and line breaks
 */
// eslint-disable-next-line complexity
export function parseCSV(csvText: string): ParsedCSV {
  const rows: string[][] = [];
  let current = "";
  let insideQuotes = false;
  let currentRow: string[] = [];

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        // Escaped quote
        current += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === "," && !insideQuotes) {
      currentRow.push(current.trim());
      current = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      // Skip carriage returns
      if (char === "\r" && nextChar === "\n") {
        i++;
      }
      if (current.trim() || currentRow.length > 0) {
        currentRow.push(current.trim());
      }
      if (currentRow.length > 0 && currentRow.some((cell) => cell)) {
        rows.push(currentRow);
        currentRow = [];
        current = "";
      }
    } else {
      current += char;
    }
  }

  // Push last row and cell
  if (current.trim() || currentRow.length > 0) {
    currentRow.push(current.trim());
  }
  if (currentRow.length > 0 && currentRow.some((cell) => cell)) {
    rows.push(currentRow);
  }

  const headers = rows[0] || [];
  const dataRows = rows.slice(1);

  return { headers, rows: dataRows };
}
