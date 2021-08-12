import cheerio from "cheerio";

import {
  contactReducer,
  extractGoogleQuery,
  parseFAQ,
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
    "Jl. Palsu, No. 9",
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

  it("should set 'verifikasi' to `true` if 'terakhir_update' is not empty", () => {
    const obj: Record<string, number | string> = {};
    const col: SheetColumn = {
      name: "Terakhir Update",
      index: 9,
    };

    const result = reducer(obj, col);

    expect(result).toHaveProperty("terakhir_update");
    expect(result.terakhir_update).toBe("19/7/2021");
    expect(result).toHaveProperty("verifikasi");
    expect(result.verifikasi).toBe(1);
  });
});
