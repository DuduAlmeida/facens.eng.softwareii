import { DataBase } from "../data/index";

export class StudentCourseService {
  constructor(protected readonly db: DataBase) {}

  public chooseCourse(studentId: number, courseId: number) {
    throw new Error("Not implemented yet.");
  }

  public makeTest(studentId: number, courseId: number) {}

  public finishCourse(studentId: number, courseId: number) {
    throw new Error("Not implemented yet.");
  }
}
