import { SUBSCRIPTION_TYPE_LIST } from "../constants/inscricoes";
import { InscritionType } from "../models/CursoEstudante.model";

export class CreateUpdateStudentPayload {
  public name: string = "";
  public subscription: InscritionType = "BASIC";

  constructor(object?: any) {
    this.name = String(object?.name);
    this.subscription = SUBSCRIPTION_TYPE_LIST.includes(
      String(object?.subscription) as InscritionType
    )
      ? (String(object?.subscription) as InscritionType)
      : "BASIC";
  }
}
