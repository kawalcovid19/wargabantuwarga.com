import fs from "fs";
import path from "path";
import fetchMock from "jest-fetch-mock";
import { fetchDatabase } from "../fetch-database";

describe("fetchDatabase", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
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

    // TODO: perform better assertions for the file contents
  });
});
