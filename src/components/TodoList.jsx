/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
