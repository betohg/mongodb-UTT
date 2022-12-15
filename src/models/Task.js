import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    Nombre: {
      type: String,
      
    },
    Estado: {
      type: String,
      
    },
    Tipo: {
      type: String
    }
  }
);

export default model("Task", taskSchema);
