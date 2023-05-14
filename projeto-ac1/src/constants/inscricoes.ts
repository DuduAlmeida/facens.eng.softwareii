import { InscritionType } from "../models/CursoEstudante.model";

export const SUBSCRIPTION_TYPE: { [key: string]: InscritionType } = {
  BASIC: "BASIC",
  PREMIUM: "PREMIUM",
};

export const SUBSCRIPTION_TYPE_LIST: InscritionType[] = ["BASIC", "PREMIUM"];
