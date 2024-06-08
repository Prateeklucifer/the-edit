import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Services = models.services || model("services", userSchema);

export default Services;
