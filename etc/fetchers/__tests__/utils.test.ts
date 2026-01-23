import {
  contactReducer,
  parseFAQFromCSV,
  parseCSV,
  SheetColumn,
} from "../utils";

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

  it("should handle rows with very few columns", () => {
    const csv =
      "Kategori Pertanyaan,Pertanyaan,Jawaban,Tanggal Menulis Jawaban,Sumber,Link,Tanggal Sumber Dipublish\nTanda Bahaya,Question 1";

    const result = parseFAQFromCSV(csv);

    expect(result[0].kategori_pertanyaan).toBe("Tanda Bahaya");
    expect(result[0].pertanyaan).toBe("Question 1");
    expect(result[0].jawaban).toBe("");
    expect(result[0].created_date).toBe("");
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

  it("should generate slug when kontak column is processed", () => {
    const obj: Record<string, number | string> = {
      kebutuhan: "Rumah Sakit",
      keterangan: "Rumah Sakit Rujukan",
      lokasi: "Jakarta Timur",
      penyedia: "RS WargaBantuWarga.com",
    };
    const col: SheetColumn = {
      name: "Kontak",
      index: 5,
    };

    const result = reducer(obj, col);

    expect(result.kontak).toBe("(0123) 456789");
    expect(result.slug).toBe(
      "rumah-sakit-rumah-sakit-rujukan-jakarta-timur-rs-warga-bantu-warga-com-0123-456789",
    );
  });

  it("should set verifikasi to 0 when tanggal_verifikasi is empty", () => {
    const dataWithEmptyDate = [...data];
    dataWithEmptyDate[9] = "";
    const reducerWithEmptyDate = contactReducer(dataWithEmptyDate);
    const obj: Record<string, number | string> = {};
    const col: SheetColumn = {
      name: "Tanggal Verifikasi",
      index: 9,
    };

    const result = reducerWithEmptyDate(obj, col);

    expect(result.tanggal_verifikasi).toBe("");
    expect(result.verifikasi).toBe(0);
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

  it("should return empty headers and rows for empty CSV", () => {
    const csv = "";

    const result = parseCSV(csv);

    expect(result.headers).toEqual([]);
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
