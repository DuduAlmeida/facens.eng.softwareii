import { generateUuid } from "../utils/uuid";
export class Student {
  constructor(public nome: string, public inscricao) {}

  public id: string = generateUuid();
}
