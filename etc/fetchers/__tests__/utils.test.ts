import { parseFAQ } from "../utils";

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
