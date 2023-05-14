import { Request, Response, NextFunction } from "express";
import { DataBase } from "../data";
import { StudentService } from "src/services/student.service";
import { CreateUpdateStudentPayload } from "src/payloads/Student.payloads";

export class StudentController {
  constructor(protected readonly db: DataBase) {}

  protected readonly service: StudentService = new StudentService(this.db);

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const response = await this.service.getAll();

    return res.status(response?.error ? 401 : 200).json(response);
  }

  public async getOne(req: Request, res: Response, next: NextFunction) {
    const id: string = String(req.params.id);

    const response = await this.service.getOne(id);

    return res.status(response?.error ? 401 : 200).json(response);
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    let id: string = req.params.id;

    const payload = new CreateUpdateStudentPayload(req.body);

    const response = await this.service.update(id, payload);

    return res.status(response?.error ? 401 : 200).json(response);
  }
  public async delete(req: Request, res: Response, next: NextFunction) {
    let id: string = req.params.id;

    const response = await this.service.delete(id);

    return res.status(response?.error ? 401 : 200).json(response);
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    const payload = new CreateUpdateStudentPayload(req.body);

    const response = await this.service.create(payload);

    return res.status(response?.error ? 401 : 200).json(response);
  }
}
