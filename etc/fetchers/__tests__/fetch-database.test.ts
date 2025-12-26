import fs from "fs";
import path from "path";
import fetchMock from "jest-fetch-mock";
import { fetchDatabase } from "../fetch-database";

describe("fetchDatabase", () => {
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

  it("fetches database using hybrid HTML discovery and CSV data parsing", async () => {
    const htmlMock = fs.readFileSync(
      path.resolve(__dirname, "../__mocks__/wbw-database.html"),
      "utf-8",
    );
    const csvMock = fs.readFileSync(
      path.resolve(__dirname, "../__mocks__/wbw-database-aceh.csv"),
      "utf-8",
    );

    // Mock HTML response for sheet discovery
    fetchMock.mockResponseOnce(htmlMock);
    // Mock CSV response for each sheet (same data for all sheets in test)
    fetchMock.mockResponseOnce(csvMock);

    await fetchDatabase();

    // Verify both HTML and CSV fetches were made
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://docs.google.com/spreadsheets/d/1SRByPnPalzDHgo5RM85yv2V_N8Z-OylBbIgrre_xwg0/htmlview",
    );
    // CSV call should have gid parameter
    expect(fetchMock.mock.calls[1][0] as string).toContain(
      "export?format=csv&gid=",
    );

    expect(writeFileSyncSpy).toHaveBeenCalledTimes(1);
    const writtenData = JSON.parse(
      writeFileSyncSpy.mock.calls[0][1] as string,
    ) as Array<{ id: string; name: string; slug: string; data: unknown[] }>;

    // Verify structure
    expect(Array.isArray(writtenData)).toBe(true);
    expect(writtenData.length).toBeGreaterThan(0);

    // Verify first sheet
    const firstSheet = writtenData[0];
    expect(firstSheet).toHaveProperty("id");
    expect(firstSheet).toHaveProperty("name");
    expect(firstSheet).toHaveProperty("slug");
    expect(firstSheet).toHaveProperty("data");
    expect(Array.isArray(firstSheet.data)).toBe(true);
    expect(firstSheet.data.length).toBeGreaterThan(0);

    // Verify first record in first sheet
    const firstRecord = firstSheet.data[0] as Record<string, unknown>;
    expect(firstRecord).toHaveProperty("kebutuhan");
    expect(firstRecord).toHaveProperty("kontak");
    expect(firstRecord).toHaveProperty("verifikasi");
  });
});
