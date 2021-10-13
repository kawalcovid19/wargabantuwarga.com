import telekonseling from "~/_content/telekonseling.json";

export type Telecounselings = Telecounseling[];

export type Telecounseling = {
  readonly supports: TelecounselingSupport[];
};

export type TelecounselingSupport = {
  readonly support: string;
  readonly description: string;
  readonly contents: TelecounselingContents[];
};

export type TelecounselingContents = {
  readonly title: string;
  readonly url: string;
};

export default telekonseling as unknown as Telecounseling;
