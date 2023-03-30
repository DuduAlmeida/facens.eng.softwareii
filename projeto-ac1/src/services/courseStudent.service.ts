import { DataBase } from "../data/index";
import { Test } from "../models/Prova.model";
import { CourseStudent } from "../models/CursoEstudante.model";
import { Course } from "src/models/Curso.model";

export class StudentCourseService {
  constructor(protected readonly db: DataBase) {}

  public startCourse(studentId: string, courseId: string): CourseStudent {
    // const student = this.db.getStudentById(studentId);
    // const course = this.db.getCourseById(courseId);
    // if (!course) throw new Error("Curso não encontrado");
    // if (!student) throw new Error("Estudante não encontrado");
    // const courseVinculated = new CourseStudent(course, student);
    // this.db.coursesStudent.push(courseVinculated);
    // return courseVinculated;
  }

  public chooseAditionalCourses(
    courses: Course[],
    studentId: string
  ): CourseStudent {}

  public makeTest(
    studentId: string,
    courseId: string,
    grade: number
  ): CourseStudent {
    // const studentCourse = this.db.getStudentCourse(studentId, courseId);
    // if (grade < 0) {
    //   throw new Error("Valor inválido para a nota");
    // }
    // if (studentCourse.course.countTests <= studentCourse.tests.length) {
    //   throw new Error("Você já realizou o máximo de provas para esse curso");
    // }
    // const newTest = new Test(grade);
    // studentCourse.tests.push(newTest);
    // return studentCourse;
  }

  public finishCourse(studentId: string, courseId: string): CourseStudent {
    throw new Error("Not implemented yet.");
  }
}
