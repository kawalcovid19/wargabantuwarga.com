import fs from "fs";
import path from "path";
import fetch from "cross-fetch";

interface VaccinationRegions {
  province: string;
  city: Array<`${"Kota" | "Kab."} ${string}`>;
}

interface VaccinationRegionsResponse {
  data: Array<VaccinationRegions>;
}

interface VaccinationLocation {
  province: string;
  city: string;
  title: string;
  datestart: `${number}-${number}-${number}`;
  dateend: `${number}-${number}-${number}`;
  timestart: `${number}:${number}:${number}`;
  timeend: `${number}:${number}:${number}`;
  registration: string;
  agerange: Array<`${string} (${number}-${number | null} Tahun)`>;
  description: string;
  link: string;
  address: string;
  map: string;
  isFree: boolean;
  isvalid: boolean;
  code: string;
  dateadded: `${number}-${number}-${number}`;
}

interface VaccinationRegion {
  data: Array<VaccinationLocation>;
}

export async function fetchVaccinationDatabase() {
  const regions = (await (
    await fetch("https://api.vaksinasi.id/regions")
  ).json()) as VaccinationRegionsResponse;

  const promisedLocations = [];
  for (const { province } of regions.data) {
    promisedLocations.push(
      fetch(`https://api.vaksinasi.id/locations/${province}`).then(
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
