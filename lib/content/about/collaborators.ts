import collaboratorsJson from "~/_content/about/collaborators.json";

export type Collaborator = {
  readonly name: string;
  readonly link_url: string;
  readonly thumbnail_image: string;
};

export type Collaborators = {
  readonly collaborators: Collaborator[];
};

export default collaboratorsJson as unknown as Collaborators;
