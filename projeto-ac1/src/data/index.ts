import { Course } from "../models/Curso.model";
import { Student } from "../models/Estudante.model";
import { TopicoForum } from "../models/TopicoForum.model";
import { CourseStudent } from "src/models/CursoEstudante.model";

export class DataBase {
  public readonly courses: Course[] = [];
  public readonly students: Student[] = [];
  public coursesStudent: CourseStudent[] = [];
  public readonly topicosForum: TopicoForum[] = [];

  public getStudentById(id: string): Student | undefined {
    return !!this.students
      ? this.students.find((s: Student) => !!s?.id && s?.id === id)
      : undefined;
  }

  public getCourseById(id: string): Course | undefined {
    return !!this.courses
      ? this.courses.find((s: Course) => !!s?.id && s?.id === id)
      : undefined;
  }

  public setStudent(payload: Student): Student {
    const indexToUpdate = this.students.findIndex(
      (s: Student) => s?.id === payload.id
    );

    return (this.students[indexToUpdate] = payload);
  }

  public setCourseStudent(payload: CourseStudent): CourseStudent {
    const indexToUpdate = this.coursesStudent.findIndex(
      (s: CourseStudent) => s?.id === payload.id
    );

    return (this.coursesStudent[indexToUpdate] = payload);
  }

  public getStudentCourse(
    studentId: string,
    courseId: string
  ): CourseStudent | undefined {
    const courseStudents = this.coursesStudent.filter(
      (item) => item.student.id === studentId && item.course.id === courseId
    );

    return courseStudents.length >= 0 ? courseStudents[0] : undefined;
  }
}
