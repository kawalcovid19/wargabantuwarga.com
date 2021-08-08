import { Contact, ProvincePath, Provinces } from "../provinces";

export const getProvincesPaths = (provinces: Provinces): ProvincePath[] => {
  return provinces.map((province) => {
    const provinceSlug = province.slug;

    return {
      params: { provinceSlug },
    };
  });
};

export type ContactPath = {
  params: {
    provinceSlug: string;
    contactSlug: string;
  };
};

export const getContactsPaths = (provinces: Provinces): ContactPath[] => {
  const contactsPaths: ContactPath[] = [];
  provinces.forEach((province) => {
    province.data.forEach((contact: Contact) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const provinceSlug = province.slug;
      contactsPaths.push({
        params: { provinceSlug, contactSlug: contact.slug },
      });
    });
  });
  return contactsPaths;
};
