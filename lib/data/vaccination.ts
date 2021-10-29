import { Contact } from "./provinces";
import vaccination from "~/data/wbw-vaccination-database.json";

type City = `${"Kab." | "Kota"} ${string}`;
type DateString = `${number}-${number}-${number}`;
type TimeString = `${number}:${number}:${number}`;
type VaccinationAgeRange = Array<`${string} (${number}-${
  | number
  | null} Tahun)`>;

export interface VaccinationRegions {
  province: string;
  city: Array<City>;
}

export interface VaccinationRegionsResponse {
  data: Array<VaccinationRegions>;
}
export interface VaccinationLocation {
  province: string;
  city: City;
  title: string;
  datestart: DateString;
  dateend: DateString;
  timestart: TimeString;
  timeend: TimeString;
  registration: string;
  agerange: VaccinationAgeRange;
  description: string;
  link: string;
  address: string;
  map: string;
  isFree: boolean;
  isvalid: boolean;
  code: string;
  dateadded: DateString;
}

type _location = VaccinationLocation;
export interface VaccinationRegion {
  data: Array<VaccinationLocation>;
}

export interface VaccinationContact extends Contact {
  rentang_umur: _location["agerange"];
  buka_waktu: _location["timestart"];
  tutup_waktu: _location["timeend"];
  mulai_tanggal: _location["datestart"];
  selesai_tanggal: _location["dateend"];
  kode?: _location["code"];
  gratis?: _location["isFree"];
  map: _location["map"];
  link: _location["link"];
}

export type Vaccination = { [province: string]: VaccinationContact[] };

export default vaccination as unknown as Vaccination;
