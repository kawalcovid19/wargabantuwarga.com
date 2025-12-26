import cheerio from "cheerio";

import {
  contactReducer,
  extractGoogleQuery,
  parseFAQ,
  parseFAQFromCSV,
  parseCSV,
  SheetColumn,
} from "../utils";

describe("utils > parseFAQ", () => {
  it("should return correct JSON", async () => {
    const correctHtml = `
    <div id="sheets-viewport">
      <div id="0">
        <table>
          <tbody>
            <tr>
              <th>Kategori Pertanyaan</th>
              <th>Pertanyaan</th>
              <th>Jawaban</th>
              <th>Created_date</th>
              <th>Sumber</th>q
              <th>Link</th>
              <th>Published Date</th>
            </tr>
            <tr>
              <td>Tanda Bahaya</td>
              <td>Kapan saya harus ke IGD?</td>
              <td>Jika ada tanda-tanda seperti:<br>- Sesak nafas &gt;30x per menit, saturasi &lt;90%<br>- Nyeri dada berat atau nyeri dada menetap<br>- Mendadak merasa kebingungan<br>- Mengantuk terus, tidak bisa tetap sadar<br>- Kulit, bibir, atau kuku berubah warna menjadi biru<br>Jika mulai ada gejala-gejala ini, SEGERA KE IGD RUMAH SAKIT. Jika ada gejala lain yang mengkhawatirkan, bisa dikonsultasikan dengan dokter.</td>
              <td>12 Jul 2021</td>
              <td>Saran Dokter</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    `;

    const result = await parseFAQ(correctHtml);
    expect(result).toStrictEqual([
      {
        kategori_pertanyaan: "Tanda Bahaya",
        pertanyaan: "Kapan saya harus ke IGD?",
        jawaban:
          "Jika ada tanda-tanda seperti:<br>- Sesak nafas &gt;30x per menit, saturasi &lt;90%<br>- Nyeri dada berat atau nyeri dada menetap<br>- Mendadak merasa kebingungan<br>- Mengantuk terus, tidak bisa tetap sadar<br>- Kulit, bibir, atau kuku berubah warna menjadi biru<br>Jika mulai ada gejala-gejala ini, SEGERA KE IGD RUMAH SAKIT. Jika ada gejala lain yang mengkhawatirkan, bisa dikonsultasikan dengan dokter.",
        created_date: "12 Jul 2021",
        sumber: "Saran Dokter",
        link: "",
        published_date: "",
      },
    ]);
  });
});

describe("utils > parseFAQFromCSV", () => {
  it("should parse simple FAQ CSV", () => {
    const csv =
      "Kategori Pertanyaan,Pertanyaan,Jawaban,Tanggal Menulis Jawaban,Sumber,Link,Tanggal Sumber Dipublish\nTanda Bahaya,Kapan saya harus ke IGD?,Segera ke IGD,12 Jul 2021,Saran Dokter,,";

    const result = parseFAQFromCSV(csv);

    expect(result).toStrictEqual([
      {
        kategori_pertanyaan: "Tanda Bahaya",
        pertanyaan: "Kapan saya harus ke IGD?",
        jawaban: "Segera ke IGD",
        created_date: "12 Jul 2021",
        sumber: "Saran Dokter",
        link: "",
        published_date: "",
      },
    ]);
  });

  it("should handle multi-line answers in quoted cells", () => {
    const csv =
      'Kategori Pertanyaan,Pertanyaan,Jawaban,Tanggal Menulis Jawaban,Sumber,Link,Tanggal Sumber Dipublish\n"Tanda Bahaya","Kapan saya harus ke IGD?","Jika ada tanda-tanda seperti:\n- Sesak nafas\n- Nyeri dada","12 Jul 2021","Saran Dokter","",""';

    const result = parseFAQFromCSV(csv);

    expect(result).toStrictEqual([
      {
        kategori_pertanyaan: "Tanda Bahaya",
        pertanyaan: "Kapan saya harus ke IGD?",
        jawaban: "Jika ada tanda-tanda seperti:\n- Sesak nafas\n- Nyeri dada",
        created_date: "12 Jul 2021",
        sumber: "Saran Dokter",
        link: "",
        published_date: "",
      },
    ]);
  });

  it("should handle multiple FAQ entries", () => {
    const csv =
      "Kategori Pertanyaan,Pertanyaan,Jawaban,Tanggal Menulis Jawaban,Sumber,Link,Tanggal Sumber Dipublish\nTanda Bahaya,Question 1,Answer 1,12 Jul 2021,Dokter,,\nGejala,Question 2,Answer 2,13 Jul 2021,Rumah Sakit,,";

    const result = parseFAQFromCSV(csv);

    expect(result).toHaveLength(2);
    expect(result[0].kategori_pertanyaan).toBe("Tanda Bahaya");
    expect(result[1].kategori_pertanyaan).toBe("Gejala");
  });

  it("should handle quoted values with commas", () => {
    const csv =
      'Kategori Pertanyaan,Pertanyaan,Jawaban,Tanggal Menulis Jawaban,Sumber,Link,Tanggal Sumber Dipublish\n"Tanda Bahaya, Penting","Kapan saya harus ke IGD?","Segera, segera ke IGD","12 Jul 2021, pukul 12","Saran, Dokter","",""';

    const result = parseFAQFromCSV(csv);

    expect(result[0].kategori_pertanyaan).toBe("Tanda Bahaya, Penting");
    expect(result[0].pertanyaan).toBe("Kapan saya harus ke IGD?");
    expect(result[0].jawaban).toBe("Segera, segera ke IGD");
  });

  it("should skip empty rows", () => {
    const csv =
      "Kategori Pertanyaan,Pertanyaan,Jawaban,Tanggal Menulis Jawaban,Sumber,Link,Tanggal Sumber Dipublish\nTanda Bahaya,Question 1,Answer 1,12 Jul 2021,Dokter,,\n\nGejala,Question 2,Answer 2,13 Jul 2021,Rumah Sakit,,";

    const result = parseFAQFromCSV(csv);

    expect(result).toHaveLength(2);
  });

  it("should handle missing optional fields", () => {
    const csv =
      "Kategori Pertanyaan,Pertanyaan,Jawaban,Tanggal Menulis Jawaban,Sumber,Link,Tanggal Sumber Dipublish\nTanda Bahaya,Question 1,Answer 1,12 Jul 2021,,";

    const result = parseFAQFromCSV(csv);

    expect(result[0].sumber).toBe("");
    expect(result[0].link).toBe("");
    expect(result[0].published_date).toBe("");
  });

  it("should handle CRLF line endings", () => {
    const csv =
      "Kategori Pertanyaan,Pertanyaan,Jawaban,Tanggal Menulis Jawaban,Sumber,Link,Tanggal Sumber Dipublish\r\nTanda Bahaya,Question 1,Answer 1,12 Jul 2021,Dokter,,\r\nGejala,Question 2,Answer 2,13 Jul 2021,Rumah Sakit,,";

    const result = parseFAQFromCSV(csv);

    expect(result).toHaveLength(2);
    expect(result[0].kategori_pertanyaan).toBe("Tanda Bahaya");
  });
});

describe("utils > extractGoogleQuery", () => {
  it("should extract query from a single link element", () => {
    const el = `<a href="https://www.google.com/url?q=http://wa.me/6281286109493&sa=D&source=editors&ust=1627902606786000&usg=AOvVaw0Ou4V_199oMgGoMYp8FaAW">
        http://wa.me/6281286109493
      </a>`;

    const extracted = extractGoogleQuery(el);
    expect(extracted).not.toBe(el);

    const $ = cheerio.load(extracted);
    const parsedEl = $("a");
    expect(parsedEl.attr("href")).toBe(parsedEl.text().trim());
  });

  it("should extract query from multiple link elements", () => {
    const el = `<div>
      <a href="https://www.google.com/url?q=http://wa.me/6281286109493&sa=D&source=editors&ust=1627902606786000&usg=AOvVaw0Ou4V_199oMgGoMYp8FaAW">
        http://wa.me/6281286109493
      </a>
      <a href="https://www.google.com/url?q=https://3r-medika-gas-isi-ulang-gas-oxygen-medis.business.site/?utm_source%3Dgmb%26utm_medium%3Dreferral&sa=D&source=editors&ust=1627902606786000&usg=AOvVaw3UsJ1uI79Io9KslmnQtDXq">
      https://3r-medika-gas-isi-ulang-gas-oxygen-medis.business.site/?utm_source=gmb&amp;utm_medium=referral
      </a>
    </div>`;

    const extracted = extractGoogleQuery(el);

    expect(el).not.toBe(extracted);
    const $ = cheerio.load(extracted);
    const links = $("a");

    links.each((_, link) => {
      const extractedEl = $(link);
      expect(extractedEl.attr("href")).toBe(extractedEl.text().trim());
    });
  });

  it("should not extract anything if the element is not a link", () => {
    const el = `<div>a</div>`;

    const extracted = extractGoogleQuery(el);
    expect(el).toBe(extracted);
  });
});

describe("utils > contactReducer", () => {
  const data = [
    "Rumah Sakit",
    "",
    "Rumah Sakit Rujukan",
    "jakarta timur",
    "RS WargaBantuWarga.com",
    "(0123) 456789",
    '<div class="alamat">Jl. Palsu, No. 9</div>',
    "",
    "",
    "19/7/2021",
    "layanan palsu",
    "tidak tersedia",
  ];
  const reducer = contactReducer(data);

  it("should transform 'lokasi' value to title case", () => {
    const obj: Record<string, number | string> = {};
    const col: SheetColumn = {
      name: "LOKASI",
      index: 3,
    };

    const result = reducer(obj, col);

    expect(result).toHaveProperty("lokasi");
    expect(result.lokasi).toBe("Jakarta Timur");
  });

  it("should transform 'ketersediaan' value to title case", () => {
    const obj: Record<string, number | string> = {};
    const col: SheetColumn = {
      name: "kEtErSediaan",
      index: 11,
    };

    const result = reducer(obj, col);

    expect(result).toHaveProperty("ketersediaan");
    expect(result.ketersediaan).toBe("Tidak Tersedia");
  });

  it("should set 'verifikasi' to `true` if 'tanggal_verifikasi' is not empty", () => {
    const obj: Record<string, number | string> = {};
    const col: SheetColumn = {
      name: "Tanggal Verifikasi",
      index: 9,
    };

    const result = reducer(obj, col);

    expect(result).toHaveProperty("tanggal_verifikasi");
    expect(result.tanggal_verifikasi).toBe("19/7/2021");
    expect(result).toHaveProperty("verifikasi");
    expect(result.verifikasi).toBe(1);
  });

  it("should remove html tag from alamat", () => {
    const obj: Record<string, number | string> = {};
    const col: SheetColumn = {
      name: "alamat",
      index: 6,
    };

    const result = reducer(obj, col);

    expect(result.alamat).toBe("Jl. Palsu, No. 9");
  });
});

describe("utils > parseCSV", () => {
  it("should parse simple CSV with no special characters", () => {
    const csv = "name,age,city\nJohn,30,NYC\nJane,25,LA";

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["name", "age", "city"]);
    expect(result.rows).toEqual([
      ["John", "30", "NYC"],
      ["Jane", "25", "LA"],
    ]);
  });

  it("should handle quoted values with commas", () => {
    const csv =
      'name,address,phone\n"Doe, John","123 Main St, Apt 4","(555) 123-4567"';

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["name", "address", "phone"]);
    expect(result.rows).toEqual([
      ["Doe, John", "123 Main St, Apt 4", "(555) 123-4567"],
    ]);
  });

  it("should handle escaped quotes", () => {
    const csv = 'name,quote\nJohn,"He said ""Hello"""';

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["name", "quote"]);
    expect(result.rows).toEqual([["John", 'He said "Hello"']]);
  });

  it("should handle multi-line values (newlines inside quotes)", () => {
    const csv = 'name,address\nJohn,"123 Main St\nApt 4"';

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["name", "address"]);
    expect(result.rows).toEqual([["John", "123 Main St\nApt 4"]]);
  });

  it("should handle CRLF line endings", () => {
    const csv = "name,age\r\nJohn,30\r\nJane,25";

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["name", "age"]);
    expect(result.rows).toEqual([
      ["John", "30"],
      ["Jane", "25"],
    ]);
  });

  it("should handle mixed line endings", () => {
    const csv = "name,age\r\nJohn,30\nJane,25";

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["name", "age"]);
    expect(result.rows).toEqual([
      ["John", "30"],
      ["Jane", "25"],
    ]);
  });

  it("should handle real-world LBH data with multi-line phone numbers", () => {
    const csv =
      'Nama LBH,Nomor Kontak\n"LBH Jakarta","Tlp: (021) 3145518\nFax: (021) 3912377"\n"LBH Medan","Telp. 061-4515 340\nFax. 061-4569 749"';

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["Nama LBH", "Nomor Kontak"]);
    expect(result.rows).toEqual([
      ["LBH Jakarta", "Tlp: (021) 3145518\nFax: (021) 3912377"],
      ["LBH Medan", "Telp. 061-4515 340\nFax. 061-4569 749"],
    ]);
  });

  it("should skip empty rows", () => {
    const csv = "name,age\nJohn,30\n\nJane,25\n\n";

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["name", "age"]);
    expect(result.rows).toEqual([
      ["John", "30"],
      ["Jane", "25"],
    ]);
  });

  it("should handle trailing whitespace in cells", () => {
    const csv = "name,age\n  John  ,  30  \n  Jane  ,  25  ";

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["name", "age"]);
    expect(result.rows).toEqual([
      ["John", "30"],
      ["Jane", "25"],
    ]);
  });

  it("should handle empty cells", () => {
    const csv = "name,middle,last\nJohn,,Doe\n,Jane,Smith";

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["name", "middle", "last"]);
    expect(result.rows).toEqual([
      ["John", "", "Doe"],
      ["", "Jane", "Smith"],
    ]);
  });

  it("should return empty rows array for headers only", () => {
    const csv = "name,age,city";

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["name", "age", "city"]);
    expect(result.rows).toEqual([]);
  });

  it("should handle single row of data", () => {
    const csv = "name,age\nJohn,30";

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["name", "age"]);
    expect(result.rows).toEqual([["John", "30"]]);
  });

  it("should handle quoted value at end of row", () => {
    const csv = 'name,note\nJohn,"Important note"';

    const result = parseCSV(csv);

    expect(result.headers).toEqual(["name", "note"]);
    expect(result.rows).toEqual([["John", "Important note"]]);
  });
});
