const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
const TodoSchema = new mongoose.Schema({  
    name: {
        type: String,
        required: true
    },
});
const Todo = mongoose.model('Todo', TodoSchema);

app.use(express.json());

app.get("/todo/items", async (req, res) => {
  console.log("read items", await Todo.find())
  try {
    const todos = await Todo.find();
    console.log("todos", todos)
    res.json(todos)
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/todo/items", async (req, res) => {
  try {
    const todo = new Todo(req.body);    
    await todo.save()
    console.log(req.body);
    res.json(todo)  
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndRemove(req.params.id);
    if (!todo) {
      return res.status(404).send({ error: "Todo not found" });
    }
    res.send({ todo });
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/api", async (req, res) => {
  res.json('hello')
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
