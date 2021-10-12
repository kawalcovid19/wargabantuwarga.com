import fs from "fs";
import path from "path";
import fetch from "cross-fetch";
import {
  VaccinationRegionsResponse,
  VaccinationRegion,
  VaccinationContact,
} from "../../lib/data/vaccination";
import { getKebabCase } from "../../lib/string-utils";

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

  const locations: { [province: string]: VaccinationContact[] } = {};

  for (const region of await Promise.all(promisedLocations)) {
    locations[region.data[0].province] = region.data.map((location) => ({
      id: `${region.data.findIndex((index) => location.title === index.title)}`,
      keterangan: "Lokasi Vaksinasi COVID-19",
      lokasi: location.city,
      verifikasi: location.isvalid ? 1 : 0,
      penyedia: location.title,
      alamat: location.address,
      slug: getKebabCase(location.title),
      informasi_2: location.description,
      terakhir_update: location.dateadded,
      rentang_umur: location.agerange,
      buka_waktu: location.timestart,
      tutup_waktu: location.timeend,
      mulai_tanggal: location.datestart,
      selesai_tanggal: location.dateend,
      link: location.link,
      map: location.map,
    }));
  }
  const text = JSON.stringify(locations);

  fs.writeFileSync(
    path.resolve(__dirname, "../../data/wbw-vaccination-database.json"),
    text,
  );
}
