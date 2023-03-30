import { DataBase } from "../src/data/index";
import { MOCKED_COURSES } from "../mock/courses";
import { MOCKED_STUDENTS } from "../mock/students";
// import { StudentCourseService } from "..src/services/courseStudent.service";

describe("CourseStudent", () => {
  it("test entity", () => {
    const db = new DataBase();
    MOCKED_COURSES.forEach((mocked_course) => db.courses.push(mocked_course));
    MOCKED_STUDENTS.forEach((mocked_student) =>
      db.students.push(mocked_student)
    );

    expect(db.courses.length).toEqual(MOCKED_COURSES.length);
    expect(db.students.length).toEqual(MOCKED_STUDENTS.length);
    // const service = new StudentCourseService(db);
  });
});
