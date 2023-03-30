import { Course } from "../models/Curso.model";
import { Student } from "../models/Estudante.model";
import { TopicoForum } from "../models/TopicoForum.model";
import { CourseStudent } from "src/models/CursoEstudante.model";

export class DataBase {
  public readonly courses: Course[] = [];
  public readonly students: Student[] = [];
  public readonly topicosForum: TopicoForum[] = [];
  public readonly coursesStudent: CourseStudent[] = [];

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

  public getStudentCourse(studentId: string, courseId: string): CourseStudent {
    const [courseStudent] = this.coursesStudent.filter(
      (item) => item.student.id === studentId && item.course.id === courseId
    );

    return courseStudent;
  }
}
