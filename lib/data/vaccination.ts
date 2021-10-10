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

export interface VaccinationRegion {
  data: Array<VaccinationLocation>;
}
