// src/components/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && dueDate) {
      addTodo({ text: input, dueDate: dueDate, completed: false });
      setInput('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="Due Date"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
