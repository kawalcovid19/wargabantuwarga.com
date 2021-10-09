export interface VaccinationRegions {
  province: string;
  city: Array<`${"Kab." | "Kota"} ${string}`>;
}

export interface VaccinationRegionsResponse {
  data: Array<VaccinationRegions>;
}

export interface VaccinationLocation {
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

export interface VaccinationRegion {
  data: Array<VaccinationLocation>;
}
