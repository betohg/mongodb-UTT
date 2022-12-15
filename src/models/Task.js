import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    Nombre: {
      type: String,
      required: true,
      unique: false,
      trim: true
    },
    Estado: {
      type: String,
      required: true
    },
    Fecha: {
      type: Date
    },
  },
  {
    timestamps: false,
    versionKey: false
  }
);

export default model("Task", taskSchema);
