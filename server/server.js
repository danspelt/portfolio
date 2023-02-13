const express = require("express");
const app = express();
const Todo = require("./models/Todo"); // Mongoose model for to-do items

app.use(express.json());

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send({ todos });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/todos", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.send({ todo });
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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
