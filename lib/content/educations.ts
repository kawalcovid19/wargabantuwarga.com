import educations from "~/_content/educations.json";

export type Educations = Education[];

export type Education = {
  readonly topics: EducationTopic[];
};

export type EducationTopic = {
  readonly topic: string;
  readonly description: string;
  readonly contents: EducationContents[];
};

export type EducationContents = {
  readonly title: string;
  readonly url: string;
};

export default educations as unknown as Education;
