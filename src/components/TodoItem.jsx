// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, index, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDueDate, setNewDueDate] = useState(todo.dueDate);

  const handleComplete = () => {
    updateTodo(index, { ...todo, completed: !todo.completed });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    deleteTodo(index);
  };

  const handleSave = () => {
    updateTodo(index, { ...todo, text: newText, dueDate: newDueDate });
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span onClick={handleComplete}>{todo.text}</span>
          <span>{todo.dueDate}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
