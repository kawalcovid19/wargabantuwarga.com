import fs from "fs";
import path from "path";
import fetchMock from "jest-fetch-mock";
import { fetchFaqSheets } from "../fetch-faq-sheets";

describe("fetchFaqSheets", () => {
  let writeFileSyncSpy: jest.SpyInstance;

  beforeEach(() => {
    writeFileSyncSpy = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {});
    fetchMock.resetMocks();
  });

  afterEach(() => {
    writeFileSyncSpy.mockRestore();
  });

  it("fetches FAQ data from Google Sheets CSV export and transforms it correctly", async () => {
    const csvMock = fs.readFileSync(
      path.resolve(__dirname, "../__mocks__/wbw-faq-sheets.csv"),
      "utf-8",
    );
    fetchMock.mockResponseOnce(csvMock);
    await fetchFaqSheets();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://docs.google.com/spreadsheets/d/1y9DSfDcPjaLsUhif8aEuAODiu2JLilXWYzLI-uLwQcM/export?format=csv",
    );

    expect(writeFileSyncSpy).toHaveBeenCalledTimes(1);
    const writtenData = JSON.parse(
      writeFileSyncSpy.mock.calls[0][1] as string,
    ) as Record<string, unknown>[];

    // Verify structure
    expect(Array.isArray(writtenData)).toBe(true);
    expect(writtenData.length).toBeGreaterThan(0);

    // Verify first record has expected fields
    const firstRecord = writtenData[0];
    expect(firstRecord).toHaveProperty("kategori_pertanyaan", "Tanda Bahaya");
    expect(firstRecord).toHaveProperty(
      "pertanyaan",
      "Kapan saya harus ke IGD?",
    );
    expect(firstRecord).toHaveProperty("jawaban");
    expect(firstRecord).toHaveProperty("created_date", "12 Jul 2021");
    expect(firstRecord).toHaveProperty("sumber", "Saran Dokter");
    expect(firstRecord).toHaveProperty("link", "");
    expect(firstRecord).toHaveProperty("published_date", "");

    // Verify second record
    const secondRecord = writtenData[1];
    expect(secondRecord).toHaveProperty(
      "kategori_pertanyaan",
      "Tatalaksana Isoman",
    );
    expect(secondRecord).toHaveProperty(
      "pertanyaan",
      "Berapa lama isolasi mandiri?",
    );
    expect(secondRecord).toHaveProperty("created_date", "10 Jul 2021");
    expect(secondRecord).toHaveProperty(
      "link",
      "https://covid19.go.id/p/protokol/protokol-tatalaksana-covid-19-di-indonesia",
    );
  });

  it("handles multi-line answers correctly in CSV format", async () => {
    const csvMock = fs.readFileSync(
      path.resolve(__dirname, "../__mocks__/wbw-faq-sheets.csv"),
      "utf-8",
    );
    fetchMock.mockResponseOnce(csvMock);
    await fetchFaqSheets();

    expect(writeFileSyncSpy).toHaveBeenCalledTimes(1);
    const writtenData = JSON.parse(
      writeFileSyncSpy.mock.calls[0][1] as string,
    ) as Record<string, unknown>[];

    // Verify multi-line content is preserved
    const jawaban = writtenData[0].jawaban as string;
    expect(jawaban).toContain("Sesak nafas");
    expect(jawaban).toContain("Nyeri dada");
    expect(jawaban).toContain("SEGERA KE IGD RUMAH SAKIT");
    // Check that newlines are preserved
    expect(jawaban.includes("\n")).toBe(true);
  });
});
