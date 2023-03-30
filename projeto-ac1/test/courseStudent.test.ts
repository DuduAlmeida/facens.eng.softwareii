import { MOCKED_COURSES, MOCKED_COURSE } from "../mock/courses";
import { MOCKED_STUDENTS, MOCKED_STUDENT } from "../mock/students";
import { getDatabaseFilled } from "../mock/database";
import { StudentCourseService } from "../src/services/courseStudent.service";

describe("CourseStudent", () => {
  /**
   * @author Eduardo
   */
  it("Deve vincular o usuário a um curso e fazer todas as provas", () => {
    const { db } = getDatabaseFilled();
    expect(db.courses.length).toEqual(MOCKED_COURSES.length);
    expect(db.students.length).toEqual(MOCKED_STUDENTS.length);

    const student = MOCKED_STUDENT;
    const course = MOCKED_COURSE;

    const service = new StudentCourseService(db);
    let courseVinculated = service.chooseCourse(student.id, course.id);

    expect(courseVinculated.course.id).toBe(course.id);
    expect(courseVinculated.student.id).toBe(student.id);

    for (let i = 0; i < course.countTests; i++) {
      courseVinculated = service.makeTest(student.id, course.id, 7);
      expect(courseVinculated.tests.length).toBe(i + 1);
    }
  });

  /**
   * @author Eduardo
   */
  it("should make a test", () => {});
});
