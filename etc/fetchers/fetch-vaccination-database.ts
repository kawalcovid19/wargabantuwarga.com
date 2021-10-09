import fs from "fs";
import path from "path";
import fetch from "cross-fetch";
import {
  VaccinationRegionsResponse,
  VaccinationRegion,
} from "../../lib/data/vaccination";

const vaksinId = "https://api.vaksinasi.id";

export async function fetchVaccinationDatabase() {
  const regions = (await (
    await fetch(`${vaksinId}/regions`)
  ).json()) as VaccinationRegionsResponse;

  const promisedLocations = [];
  for (const { province } of regions.data) {
    promisedLocations.push(
      fetch(`${vaksinId}/locations/${province}`).then(
        (res) => res.json() as unknown as VaccinationRegion,
      ),
    );
  }
  const locations = await Promise.all(promisedLocations);

  const text = JSON.stringify([...locations]);
  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw-vaccination-database.json"),
    text,
  );
}
