export class CreateUpdateCoursePaylod {
  public name: string = "";
  public teacher: string = "";
  public countTests: number = 1;

  constructor(object?: any) {
    this.name = String(object?.name);
    this.teacher = String(object?.teacher);
    this.countTests = Number(object?.countTests);
  }
}
