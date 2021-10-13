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

  it("fetches database from https://kcov.id/wbw-database correctly", async () => {
    fetchMock.mockResponseOnce(
      fs.readFileSync(
        path.resolve(__dirname, "../__mocks__/wbw-database.html"),
        "utf-8",
      ),
    );
    await fetchDatabase();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith("https://kcov.id/wbw-database");

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
