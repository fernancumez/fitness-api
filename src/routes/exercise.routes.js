import { Router } from "express";
const router = Router();

const {
  getExercise,
  getExercises,
  createExercise,
  updateExercise,
  deleteExercise,
} = require("../controllers/exercises.controller");

router.route("/").get(getExercises).post(createExercise);
router
  .route("/:id")
  .get(getExercise)
  .put(updateExercise)
  .delete(deleteExercise);

export default router;
