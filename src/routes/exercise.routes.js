import { Router } from "express";
const router = Router();

const {
  getExercise,
  getExercises,
  createExercise,
  updateExercise,
  deleteExercise,
} = require("../controllers/exercise.controllers");

router.route("/exercises").get(getExercises).post(createExercise);
router
  .route("/exercises/:id")
  .get(getExercise)
  .put(updateExercise)
  .delete(deleteExercise);

export default router;
