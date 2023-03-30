import { MOCKED_COURSES, MOCKED_COURSE } from "../mock/courses";
import { MOCKED_STUDENTS, MOCKED_STUDENT } from "../mock/students";
import { getDatabaseFilled } from "../mock/database";
import { StudentCourseService } from "../src/services/courseStudent.service";

describe("CourseStudent", () => {
  const fillUsersCoursesTest = (grade = 7) => {
    const { db } = getDatabaseFilled();
    expect(db.courses.length).toEqual(MOCKED_COURSES.length);
    expect(db.students.length).toEqual(MOCKED_STUDENTS.length);

    const student = MOCKED_STUDENT;
    const course = MOCKED_COURSE;

    const service = new StudentCourseService(db);
    let courseVinculated = service.startCourse(student.id, course.id);

    expect(courseVinculated.course.id).toBe(course.id);
    expect(courseVinculated.student.id).toBe(student.id);

    for (let i = 0; i < course.countTests; i++) {
      courseVinculated = service.makeTest(student.id, course.id, grade);
      expect(courseVinculated.tests.length).toBe(i + 1);
    }

    return { db, student, course, service, courseVinculated };
  };

  /**
   * @author Eduardo
   */
  it("Deve vincular o usuário a um curso e fazer todas as provas", () => {
    fillUsersCoursesTest(7);
  });

  /**
   * @author Eduardo
   */
  it("Dado que tenho média igual a 5 ao finalizar um curso então, não tenho acesso a 3 cursos adicionais.", () => {
    const gradeAverage = 5;

    const { db, course, student, service } = fillUsersCoursesTest(gradeAverage);

    const courseVinculated = service.finishCourse(student.id, course.id);

    expect(courseVinculated.isFinished).toBe(true);
    expect(courseVinculated.testAverage).toBe(gradeAverage);

    const coursesChoosedByStudent = [MOCKED_COURSES.slice(0, 3)].flat();

    expect(
      service.chooseAditionalCourses(coursesChoosedByStudent, student.id)
    ).toThrow("Usuário não tem cursos adicionais disponíveis");
  });
});
