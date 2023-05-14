import express from "express";
import { getDatabaseFilled } from "../../mock/database";
import { StudentController } from "../controllers/student.controller";

const router = express.Router();
const { db } = getDatabaseFilled();

const studentController = new StudentController(db);

// #region Students routes

router.get("/student", (...props) => studentController.getAll(...props));
router.get("/student/:id", (...props) => studentController.getOne(...props));
router.post("/student", (...props) => studentController.create(...props));
router.put("/student/:id", (...props) => studentController.update(...props));
router.delete("/student/:id", (...props) => studentController.delete(...props));

// #endregion Students routes

export = router;
