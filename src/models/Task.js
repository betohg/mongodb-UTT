import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    fechaContratacion: {
      type: Date,
      default: Date.now
    },
    img: {
      data: Buffer,
      contentType: String
    },
    done: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Task", taskSchema);

