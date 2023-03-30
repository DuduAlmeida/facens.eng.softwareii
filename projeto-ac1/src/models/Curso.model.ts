import { generateUuid } from "../utils/uuid";

export class Course {
  constructor(
    public nome: string,
    public teacher: string,
    public countTests: number = 1
  ) {}

  public id: string = generateUuid();
}
