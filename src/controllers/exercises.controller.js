import Exercise from "../models/exercise";

const getExercise = async (req, res) => {
  try {
    const { id } = req.params;

    const exercise = await Exercise.findById(id);
    if (!exercise) return res.status(404).json({ error: "Exercise not found" });

    return res.status(200).json(exercise);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getExercises = async (req, res) => {
  try {
    const exercise = await Exercise.find();
    return res.status(200).json(exercise);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const createExercise = async (req, res) => {
  try {
    const { title, description, img, leftColor, rightColor } = req.body;

    const body = { title, description, img, leftColor, rightColor };

    const newExercise = new Exercise(body);

    await newExercise.save();
    return res.status(201).json({ message: "Exercise added" });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updateExercise = async (req, res) => {
  try {
    const { id } = req.params;

    const exerciseUpdated = await Exercise.findByIdAndUpdate(id, req.body);
    if (!exerciseUpdated)
      return res.status(404).json({ error: "User not found" });

    return res.status(200).json({ message: "Exercise updated" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const deleteExercise = async (req, res) => {
  try {
    const { id } = req.params;

    const exerciseDeleted = await Exercise.findByIdAndDelete(id);
    if (!exerciseDeleted)
      return res.status(404).json({ error: "Exercise not found" });

    return res.status(200).json({ message: "Exercise deleted" });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export {
  getExercise,
  getExercises,
  createExercise,
  updateExercise,
  deleteExercise,
};
