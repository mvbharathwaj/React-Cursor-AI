import React, { useState } from 'react';
import './TodoList.css';

/**
 * TodoList component for managing a list of tasks.
 * @returns {JSX.Element} The rendered TodoList component.
 */
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Hooks', completed: false },
    { id: 2, text: 'Build a portfolio', completed: true },
    { id: 3, text: 'Master TypeScript', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  /**
   * Adds a new todo item to the list.
   * @param {React.FormEvent} e - The form submission event.
   * @returns {void}
   */
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  /**
   * Toggles the completed state of a todo item.
   * @param {number} id - The ID of the todo item to toggle.
   * @returns {void}
   */
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  /**
   * Deletes a todo item from the list.
   * @param {number} id - The ID of the todo item to delete.
   * @returns {void}
   */
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="todo-container">
      <h3>📝 Todo List</h3>
      <p className="todo-stats">
        {completedCount} of {totalCount} tasks completed
      </p>

      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-btn">Add</button>
      </form>

      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="todo-checkbox"
              />
              <span className="todo-text">{todo.text}</span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-btn"
              aria-label="Delete todo"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      {todos.length === 0 && (
        <p className="empty-state">No tasks yet. Add one above! ✨</p>
      )}
    </div>
  );
}

export default TodoList; 