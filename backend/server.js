const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

// get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// create task
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: uuidv4(),
    title,
    completed: false,
    createdAt: new Date()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// toggle complete
app.patch("/tasks/:id", (req, res) => {
  const { id } = req.params;

  tasks = tasks.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );

  res.json({ message: "Task updated" });
});

// delete
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: "Task deleted" });
});

app.listen(5000, () => console.log("server running on 5000"));