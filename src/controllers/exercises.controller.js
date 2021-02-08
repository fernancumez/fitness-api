import Exercise from "../models/exercise.model";

export const getExercise = async (req, res) => {
  try {
    const exerciseId = req.params.id;

    const exercise = await Exercise.findById(exerciseId);
    if (!exercise) return res.status(404).json({ error: "Exercise not found" });

    return res.status(200).json(exercise);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const getExercises = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;

    console.log(req.query);
    const exercises = await Exercise.paginate({}, { limit, page });

    return res.status(200).json(exercises);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const createExercise = async (req, res) => {
  try {
    const { title, description, img, leftColor, rightColor } = req.body;

    const exerciseData = { title, description, img, leftColor, rightColor };

    const newExercise = new Exercise(exerciseData);

    const exercise = await newExercise.save();
    return res.status(201).json({ message: "Exercise added", exercise });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateExercise = async (req, res) => {
  try {
    const exerciseId = req.params.id;

    const updateExercise = await Exercise.findByIdAndUpdate(
      exerciseId,
      req.body
    );
    if (!updateExercise)
      return res.status(404).json({ error: "User not found" });

    const exerciseUpdated = await Exercise.findById(exerciseId);

    return res
      .status(200)
      .json({ message: "Exercise updated", exercise: exerciseUpdated });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const deleteExercise = async (req, res) => {
  try {
    const exerciseId = req.params.id;

    const exerciseDeleted = await Exercise.findByIdAndDelete(exerciseId);
    if (!exerciseDeleted)
      return res.status(404).json({ error: "Exercise not found" });

    return res
      .status(200)
      .json({ message: "Exercise deleted", exercise: exerciseDeleted });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
