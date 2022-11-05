import entityGroup, { LawFirm } from "../law-firms";

export type LawFirmPath = {
  params: {
    lawFirmSlug: string;
  };
};

export const getLawFirmsPaths = (): LawFirmPath[] => {
  const lawFirmsPaths: LawFirmPath[] = [];
  entityGroup.data.forEach((lawFirm: LawFirm) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    lawFirmsPaths.push({
      params: { lawFirmSlug: lawFirm.slug },
    });
  });

  return lawFirmsPaths;
};
