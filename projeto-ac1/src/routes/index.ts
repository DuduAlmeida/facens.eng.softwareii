import express from "express";
import { DataBase } from "../data";
import { StudentController } from "../controllers/student.controller";

const router = express.Router();
const db = new DataBase();

const studentController = new StudentController(db);

// #region Students routes

router.get("/student", studentController.getAll);
router.get("/student/:id", studentController.getOne);
router.post("/student", studentController.create);
router.put("/student/:id", studentController.update);
router.delete("/student/:id", studentController.delete);

// #endregion Students routes

export = router;
