import fs from "fs";
import path from "path";
import fetchMock from "jest-fetch-mock";
import { fetchDatabase } from "../fetch-database";

describe("fetchDatabase", () => {
  const writeFileSyncSpy = jest.spyOn(fs, "writeFileSync");

  beforeEach(() => {
    fetchMock.resetMocks();
    writeFileSyncSpy.mockImplementation(() => {});
  });

  afterEach(() => {
    writeFileSyncSpy.mockRestore();
  });

  it("fetches database from Google Sheets htmlview correctly", async () => {
    fetchMock.mockResponseOnce(
      fs.readFileSync(
        path.resolve(__dirname, "../__mocks__/wbw-database.html"),
        "utf-8",
      ),
    );
    await fetchDatabase();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://docs.google.com/spreadsheets/d/1SRByPnPalzDHgo5RM85yv2V_N8Z-OylBbIgrre_xwg0/htmlview",
    );

    expect(writeFileSyncSpy).toHaveBeenCalledTimes(1);
    expect(JSON.parse(writeFileSyncSpy.mock.calls[0][1] as string)).toEqual(
      JSON.parse(
        fs.readFileSync(
          path.resolve(__dirname, "../__mocks__/wbw-database.json"),
          "utf-8",
        ),
      ),
    );
  });
});
