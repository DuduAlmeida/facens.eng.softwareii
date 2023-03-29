import { Course } from "../models/Curso.model";
import { Student } from "../models/Estudante.model";
import { TopicoForum } from "../models/TopicoForum.model";
import { CourseStudent } from "src/models/CursoEstudante.model";

export class DataBase {
  public readonly Courses: Course[] = [];
  public readonly students: Student[] = [];
  public readonly topicosForum: TopicoForum[] = [];
  public readonly CoursesStudent: CourseStudent[] = [];
}
