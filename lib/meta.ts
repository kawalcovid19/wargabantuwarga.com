import { Contact } from "~/lib/provinces";

export type Meta = {
  title: string;
  description: string;
};

export function getProvinceMetaTitle(provinceName: string): string {
  return `Informasi Faskes & Alkes untuk COVID-19 di Provinsi ${provinceName}`;
}

export function getProvinceMeta(provinceName: string): Meta {
  return {
    // @TODO: change this after got a better title
    title: getProvinceMetaTitle(provinceName),
    description: `Informasi seputar COVID-19 dan kontak fasilitas/alat kesehatan di Provinsi ${provinceName} yang dikumpulkan relawan melalui pencarian di internet atau media sosial.`,
  };
}

export function getContactMetaTitle(
  provinceName: string,
  contact: Contact,
): string {
  const providerWithSeparator = contact.penyedia
    ? `${contact.penyedia} - `
    : "";

  const location =
    contact.lokasi && contact.lokasi != provinceName
      ? `${contact.lokasi}, ${provinceName}`
      : `${provinceName}`;

  return `${providerWithSeparator}${contact.keterangan} di ${location}`;
}

export function getContactMeta(provinceName: string, contact: Contact): Meta {
  const title = getContactMetaTitle(provinceName, contact);

  return {
    title,
    description: `Informasi ${title} yang dikumpulkan relawan melalui pencarian di internet atau media sosial.`,
  };
}
