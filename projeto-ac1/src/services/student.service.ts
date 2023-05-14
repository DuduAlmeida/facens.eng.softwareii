import array from "../utils/array";
import { DataBase } from "../data";
import { Student } from "../models/Estudante.model";
import { CreateUpdateStudentPayload } from "../payloads/Student.payloads";

type StudentResponse = {
  data?: Student;
  error: boolean;
  message?: string;
};

type ManyStudentsResponse = {
  data?: Student[];
  error: boolean;
  message?: string;
};

export class StudentService {
  constructor(protected readonly db: DataBase) {}

  public async getOne(studentId: string): Promise<StudentResponse> {
    const data = this.db.getStudentById(studentId);
    const error = !data;
    const message = error ? "Erro ao pegar o aluno" : "Aluno pego com sucesso";

    return {
      data,
      error,
      message,
    };
  }

  public async getAll(): Promise<ManyStudentsResponse> {
    const data = this.db.students;

    console.log("Os alunos", data);

    const error = !data && !array.isValid(data);
    const message = error
      ? "Erro ao pegar os alunos"
      : "Alunos pego com sucesso";

    return {
      error,
      message,
      data: error ? [] : data,
    };
  }

  public async create(
    payload: CreateUpdateStudentPayload
  ): Promise<StudentResponse> {
    const studentCreated = new Student(payload?.name, payload?.subscription);

    const data = this.db.setStudent(studentCreated);
    const error = !data;
    const message = error ? "Erro ao pegar o aluno" : "Aluno pego com sucesso";

    return {
      data,
      error,
      message,
    };
  }

  public async update(studentId: string, payload: CreateUpdateStudentPayload) {
    let studentUpdated = this.db.getStudentById(studentId);

    if (!studentUpdated) return void 0;

    if (payload?.name) studentUpdated.name = payload.name;
    if (payload?.subscription)
      studentUpdated.subscription = payload.subscription;

    const data = this.db.setStudent(studentUpdated);
    const error = !data;
    const message = error ? "Erro ao pegar o aluno" : "Aluno pego com sucesso";

    return {
      data,
      error,
      message,
    };
  }

  public async delete(studentId: string): Promise<StudentResponse> {
    this.db.removeStudent(studentId);

    return {
      error: true,
    };
  }
}
