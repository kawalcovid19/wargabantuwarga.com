import { Contact } from "~/lib/provinces";

export function getProvinceMetaTitle(provinceName: string) {
  return `Informasi Faskes & Alkes untuk COVID-19 di Provinsi ${provinceName}`;
}

export function getProvinceMeta(provinceName: string) {
  return {
    // @TODO: change this after got a better title
    title: getProvinceMetaTitle(provinceName),
    description: `Informasi seputar COVID-19 dan kontak fasilitas/alat kesehatan di Provinsi ${provinceName} yang dikumpulkan relawan melalui pencarian di internet atau media sosial.`,
  };
}

export function getContactMetaTitle(provinceName: string, contact: Contact) {
  const providerWithSeparator = contact.penyedia
    ? `${contact.penyedia} - `
    : "";

  const location =
    contact.lokasi && contact.lokasi != provinceName
      ? `${contact.lokasi}, ${provinceName}`
      : `${provinceName}`;

  return `${providerWithSeparator}${contact.keterangan} di ${location}`;
}

export function getContactMeta(provinceName: string, contact: Contact) {
  const title = getContactMetaTitle(provinceName, contact);

  return {
    title,
    description: `Informasi ${title} yang dikumpulkan relawan melalui pencarian di internet atau media sosial.`,
  };
}
