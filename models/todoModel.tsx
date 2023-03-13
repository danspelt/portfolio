import { Schema, model, models } from "mongoose";


const ToDoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});
const ToDo = models.ToDo || model("ToDo", ToDoSchema);
export default ToDo;
