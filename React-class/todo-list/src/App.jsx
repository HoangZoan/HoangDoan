import { useState, useRef, useCallback } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([{ content: "a", id: 1 }]);
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue.trim().length === 0) return;

    const id = Math.random().toString();

    setTodos([{ content: inputValue, id }, ...todos]);
    inputRef.current.value = "";
  };

  const handleDeleteTodo = useCallback((todoId) => {
    const filteredTodos = todos.filter(({ id }) => id !== todoId);

    setTodos(filteredTodos);
  }, []);

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="app center-content">
      <div className="todo-container">
        <h1 className="heading">Simple Todo App</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-control">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              ref={inputRef}
              type="text"
              placeholder="Add new todo"
            />
            <button className="btn primary" type="submit">
              Add
            </button>
          </div>

          <TodoList todos={todos} onDeleteTask={handleDeleteTodo} />

          <div className="form-footer">
            <p>
              You have <strong>{todos.length}</strong> pending task
            </p>
            <button
              className="btn danger wide"
              type="button"
              onClick={resetTodos}
            >
              Clear all
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
