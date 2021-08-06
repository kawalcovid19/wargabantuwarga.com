import vaccineSection from "~/_content/kontak-darurat/vaccine-section.json";

export type Vaccines = Vaccine[];

export type Vaccine = {
  readonly vaccine_section: VaccineDetail[];
};
export type VaccineDetail = {
  readonly title: string;
  readonly url: string;
};

export default vaccineSection as unknown as Vaccine;
