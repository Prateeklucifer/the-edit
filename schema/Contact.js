import { Schema, models, model } from "mongoose";
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    companyName: {
      type: String,
      required: [true, "company name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    phone: {
      type: Number,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Contact = models.contact || model("contact", userSchema);

export default Contact;
