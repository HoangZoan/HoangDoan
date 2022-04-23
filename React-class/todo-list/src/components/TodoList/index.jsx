import React from "react";
import TodoItem from "./TodoItem";

import "./index.css";

const TodoList = ({ todos, onDeleteTask }) => {
  return (
    <ul className="todos-list">
      {todos.map((td) => (
        <TodoItem
          todoId={td.id}
          key={td.id}
          content={td.content}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default React.memo(TodoList);
