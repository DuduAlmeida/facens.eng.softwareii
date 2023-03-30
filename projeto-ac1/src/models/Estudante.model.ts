import { generateUuid } from "../utils/uuid";
export class Student {
  constructor(public name: string, public subscription) {}

  public id: string = generateUuid();
}
