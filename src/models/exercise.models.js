import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const exerciseSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

exerciseSchema.plugin(mongoosePaginate);

export default model("exercise", exerciseSchema);
