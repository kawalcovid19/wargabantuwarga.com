import oxygenSection from "~/_content/kontak-darurat/oxygen-section.json";

export type Oxygens = Oxygen[];

export type Oxygen = {
  readonly oxygen_section: OxygenDetail[];
};
export type OxygenDetail = {
  readonly title: string;
  readonly url: string;
};

export default oxygenSection as unknown as Oxygen;
