import { provinceBuilder } from "./builders/provinces";

const provinces = [
  provinceBuilder({
    overrides: {
      name: "Province A",
    },
  }),
  provinceBuilder({
    overrides: {
      name: "Province B",
    },
  }),
];

export default provinces;
