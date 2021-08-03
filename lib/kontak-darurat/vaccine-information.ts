import vaccineInformation from "~/_content/vaccine-information.json";

export type Vaccines = Vaccine[];

export type Vaccine = {
  readonly vaccine_section: VaccineDetail[];
};
export type VaccineDetail = {
  readonly title: string;
  readonly url: string;
};

export default vaccineInformation as unknown as Vaccine;
