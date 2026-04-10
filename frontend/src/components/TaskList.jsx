function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="text-center">No tasks yet</p>;
  }

  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <div
          key={task.id}
          className="flex justify-between items-center bg-white p-3 shadow"
        >
          <span
            onClick={() => toggleTask(task.id)}
            className={`cursor-pointer ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.title}
          </span>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500"
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;