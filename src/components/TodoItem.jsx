/* eslint-disable react/prop-types */
import  { useState } from "react";

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleUpdate = () => {
    updateTodo(todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <li className="mb-2 flex items-center justify-between">
      {isEditing ? (
        <>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleUpdate}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span>{todo.task}</span>
          <div>
            <button
              className="ml-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
