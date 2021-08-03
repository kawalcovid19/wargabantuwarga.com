import oxygenInformation from "~/_content/oxygen-information.json";

export type Oxygens = Oxygen[];

export type Oxygen = {
  readonly oxygen_section: OxygenDetail[];
};
export type OxygenDetail = {
  readonly title: string;
  readonly url: string;
};

export default oxygenInformation as unknown as Oxygen;
