import Exercise from "../models/exercise";

export const getExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
  } catch (error) {
    console.error(error);
  }
};

export const getExercises = async (req, res) => {
  try {
    const exercise = await Exercise.find();
    res.json(exercise);
  } catch (error) {
    console.error(error);
  }
};

export const createExercise = async (req, res) => {
  try {
    const { title, description, img, leftColor, rightColor } = req.body;

    const newExercise = new Exercise({
      title,
      description,
      img,
      leftColor,
      rightColor,
    });

    await newExercise.save();
    res.json("Exercise added!");
  } catch (error) {
    console.error(error);
  }
};

export const updateExercise = async (req, res) => {
  try {
    const { title, description, img, leftColor, rightColor } = req.body;

    await Exercise.findByIdAndUpdate(req.params.id, {
      title,
      description,
      img,
      leftColor,
      rightColor,
    });
    res.json("Exercise updated!");
  } catch (error) {
    console.error(error);
  }
};

export const deleteExercise = async (req, res) => {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
    res.json("Exercise deleted!");
  } catch (error) {
    console.error(error);
  }
};
