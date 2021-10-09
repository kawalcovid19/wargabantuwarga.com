import fs from "fs";
import path from "path";
import fetchMock from "jest-fetch-mock";
import { fetchVaccinationDatabase } from "../fetch-vaccination-database";

describe("fetchVaksinasiDB", () => {
  const writeFileSyncSpy = jest.spyOn(fs, "writeFileSync");

  beforeEach(() => {
    fetchMock.resetMocks();
    writeFileSyncSpy.mockImplementation(() => {});
  });

  afterEach(() => {
    writeFileSyncSpy.mockRestore();
  });
  it("fetches database from api.vaksinasi.id correctly", async () => {
    const mockedResponses: { [url: string]: string } = {
      "/regions": fs.readFileSync(
        path.resolve(__dirname, "../__mocks__/vaksinid-regions.json"),
        "utf-8",
      ),
      "/locations/Aceh": fs.readFileSync(
        path.resolve(__dirname, "../__mocks__/vaksinid-locations-aceh.json"),
        "utf-8",
      ),
    };

    fetchMock.mockResponse(
      async (req) =>
        mockedResponses[new URL(req.url).pathname] ||
        '{ "details":"Not Found" }',
    );
    await fetchVaccinationDatabase();

    expect(fetchMock).toBeCalledTimes(2);

    expect(fetchMock).toBeCalledWith("https://api.vaksinasi.id/regions");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.vaksinasi.id/locations/Aceh",
    );

    expect(writeFileSyncSpy).toHaveBeenCalledTimes(1);
    expect(JSON.parse(writeFileSyncSpy.mock.calls[0][1] as string)).toEqual([
      JSON.parse(mockedResponses["/locations/Aceh"]),
    ]);
  });
});
