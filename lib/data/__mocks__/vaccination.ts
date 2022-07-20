import { vaccinationContactBuilder } from "./builders/vaccination";

const vaccination = Object.create({
  "Province A": [vaccinationContactBuilder()],
  "Province B": [vaccinationContactBuilder()],
});
export default vaccination;
