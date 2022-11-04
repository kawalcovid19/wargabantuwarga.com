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

  it("fetches database from https://kcov.id/wbw-lbh correctly", async () => {
    fetchMock.mockResponseOnce(
      fs.readFileSync(
        path.resolve(__dirname, "../__mocks__/wbw-lbh.html"),
        "utf-8",
      ),
    );
    await fetchLbh();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith("https://kcov.id/wbw-lbh");

    expect(writeFileSyncSpy).toHaveBeenCalledTimes(1);
    expect(JSON.parse(writeFileSyncSpy.mock.calls[0][1] as string)).toEqual(
      JSON.parse(
        fs.readFileSync(
          path.resolve(__dirname, "../__mocks__/wbw-lbh.json"),
          "utf-8",
        ),
      ),
    );
  });
});
