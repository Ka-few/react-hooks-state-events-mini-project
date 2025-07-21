import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div className="task" data-testid="task">
      <div className="label">{text}</div>
      <div className="category">{category}</div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;