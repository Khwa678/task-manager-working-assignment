import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 flex-1"
      />

      <button className="bg-blue-500 text-white px-4 py-2">
        Add
      </button>
    </form>
  );
}

export default TaskForm;