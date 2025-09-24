import AddTasks from "./AddTasks";

const Tasks = ({ handleAddTask, tasks, handleDelete }) => {
  return (
    <>
      <div>
        <h3>Enter your tasks</h3>
        <AddTasks addTask={handleAddTask} />
      </div>

      <div>
        {tasks && tasks.length > 0 ? (
          <ul className="mt-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="border-b flex gap-3 items-center border-gray-300 py-2 mt-2"
              >
                <span>{task.text}</span>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg shadow hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-500">No tasks added yet.</p>
        )}
      </div>
    </>
  );
};

export default Tasks;
