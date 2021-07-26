import { Province, ProvincePath } from "../provinces";

import { provinceBuilder } from "./builders/provinces";

const provinces = [provinceBuilder(), provinceBuilder()];

export const getProvincesPaths = (): ProvincePath[] => {
  const provincees = provinces as unknown as Province[];

  return provincees.map((province) => {
    const provinceSlug = province.slug;

    return {
      params: { provinceSlug },
    };
  });
};

export default provinces;
