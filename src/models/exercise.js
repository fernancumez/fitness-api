import { Schema, model } from "mongoose";

const exerciseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  leftColor: {
    type: String,
    required: true,
  },
  rightColor: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default model("exercise", exerciseSchema);
