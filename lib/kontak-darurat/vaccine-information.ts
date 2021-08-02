import vaccineInformation from "~/_content/vaccine-information.json";

export type Vaccines = Vaccine[];

export type Vaccine = {
  vaccine_section: VaccineDetail[];
};
export type VaccineDetail = {
  title: string;
  url: string;
};

export default vaccineInformation as unknown as Vaccine;
