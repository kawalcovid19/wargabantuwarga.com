import educations from "~/_content/education.json";

export type Educations = Education[];

export type Education = {
  readonly title: string;
  readonly links: EducationLink[];
};

export type EducationLink = {
  readonly title: string;
  readonly url: string;
};

export default educations as unknown as Educations;
