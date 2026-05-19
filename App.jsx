import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask('');
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>✨ To-Do App</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>Add</button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty">No tasks yet.</p>
          ) : (
            tasks.map((task) => (
              <div className="task-card" key={task.id}>
                <span
                  className={task.completed ? 'completed' : ''}
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.text}
                </span>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
