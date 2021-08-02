import oxygenInformation from "~/_content/oxygen-information.json";

export type Oxygens = Oxygen[];

export type Oxygen = {
  oxygen_section: OxygenDetail[];
};
export type OxygenDetail = {
  title: string;
  url: string;
};

export default oxygenInformation as unknown as Oxygen;
