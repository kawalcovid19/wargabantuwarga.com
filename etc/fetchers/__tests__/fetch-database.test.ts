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
    const csvMock = fs.readFileSync(
      path.resolve(__dirname, "../__mocks__/wbw-database-aceh.csv"),
      "utf-8",
    );

    // Mock HTML with embedded JavaScript sheet data
    const htmlMock = `
      <html>
        <script>
          var items = [];
          items.push({name: "DKI Jakarta", pageUrl: "...", gid: "0", initialSheet: true});
          items.push({name: "Aceh", pageUrl: "...", gid: "1011184764", initialSheet: false});
          _optPageSwitcher = null;
        </script>
      </html>
    `;

    // Mock HTML response for sheet discovery
    fetchMock.mockResponseOnce(htmlMock);
    // Mock CSV responses for each sheet (2 sheets in test)
    fetchMock.mockResponseOnce(csvMock);
    fetchMock.mockResponseOnce(csvMock);

    await fetchDatabase();

    // Verify HTML and CSV fetches were made (1 HTML + 2 CSV for 2 sheets)
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://docs.google.com/spreadsheets/d/1SRByPnPalzDHgo5RM85yv2V_N8Z-OylBbIgrre_xwg0/htmlview",
    );
    // Both CSV calls should have gid parameters
    expect(fetchMock.mock.calls[1][0] as string).toContain(
      "export?format=csv&gid=",
    );
    expect(fetchMock.mock.calls[2][0] as string).toContain(
      "export?format=csv&gid=",
    );

    expect(writeFileSyncSpy).toHaveBeenCalledTimes(1);
    const writtenData = JSON.parse(
      writeFileSyncSpy.mock.calls[0][1] as string,
    ) as Array<{ id: string; name: string; slug: string; data: unknown[] }>;

    // Verify structure
    expect(Array.isArray(writtenData)).toBe(true);
    expect(writtenData.length).toBe(2); // Should have 2 sheets

    // Verify first sheet (DKI Jakarta)
    const firstSheet = writtenData[0];
    expect(firstSheet).toHaveProperty("id", "0");
    expect(firstSheet).toHaveProperty("name", "DKI Jakarta");
    expect(firstSheet).toHaveProperty("slug", "dki-jakarta");
    expect(firstSheet).toHaveProperty("data");
    expect(Array.isArray(firstSheet.data)).toBe(true);
    expect(firstSheet.data.length).toBeGreaterThan(0);

    // Verify second sheet (Aceh)
    const secondSheet = writtenData[1];
    expect(secondSheet).toHaveProperty("id", "1011184764");
    expect(secondSheet).toHaveProperty("name", "Aceh");
    expect(secondSheet).toHaveProperty("slug", "aceh");

    // Verify first record in first sheet has expected fields
    const firstRecord = firstSheet.data[0] as Record<string, unknown>;
    expect(firstRecord).toHaveProperty("kebutuhan");
    expect(firstRecord).toHaveProperty("kontak");
    expect(firstRecord).toHaveProperty("verifikasi");
  });
});
