const TodoItem = ({ content, todoId, onDeleteTask }) => {
  return (
    <li>
      <div className="content">{content}</div>
      <button
        className="btn danger delete"
        type="button"
        onClick={() => onDeleteTask(todoId)}
      >
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
};

export default TodoItem;
