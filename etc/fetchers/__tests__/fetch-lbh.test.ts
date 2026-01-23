import fs from "fs";
import path from "path";
import fetchMock from "jest-fetch-mock";
import { fetchLbh } from "../fetch-lbh";

describe("fetchLbh", () => {
  const writeFileSyncSpy = jest.spyOn(fs, "writeFileSync");

  beforeEach(() => {
    fetchMock.resetMocks();
    writeFileSyncSpy.mockImplementation(() => {});
  });

  afterEach(() => {
    writeFileSyncSpy.mockRestore();
  });

  it("fetches LBH data from Google Sheets CSV export and transforms it correctly", async () => {
    const csvMock = fs.readFileSync(
      path.resolve(__dirname, "../__mocks__/wbw-lbh.csv"),
      "utf-8",
    );
    fetchMock.mockResponseOnce(csvMock);
    await fetchLbh();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://docs.google.com/spreadsheets/d/1_M-Y4CcbsfyiXPhMvECu5tisVw9BT6Dni0WUzIgq2qQ/export?format=csv",
    );

    expect(writeFileSyncSpy).toHaveBeenCalledTimes(1);
    const writtenData = JSON.parse(
      writeFileSyncSpy.mock.calls[0][1] as string,
    ) as Record<string, unknown>;

    // Verify structure
    expect(writtenData).toHaveProperty("id", "0");
    expect(writtenData).toHaveProperty("name", "LBH");
    expect(writtenData).toHaveProperty("slug", "lbh");
    expect(writtenData).toHaveProperty("data");
    expect(Array.isArray(writtenData.data)).toBe(true);
    expect((writtenData.data as unknown[]).length).toBeGreaterThan(0);

    // Verify first record has expected fields
    const firstRecord = (writtenData.data as Record<string, unknown>[])[0];
    expect(firstRecord).toHaveProperty("nama_lbh");
    expect(firstRecord).toHaveProperty("slug");
    expect(firstRecord).toHaveProperty("alamat");
    expect(firstRecord).toHaveProperty("nomor_kontak");
    expect(firstRecord).toHaveProperty("email");
    expect(firstRecord).toHaveProperty("verifikasi", 1);
  });
});
