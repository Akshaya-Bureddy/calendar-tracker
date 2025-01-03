// src/components/TaskManager.js
import React, { useState } from 'react';

const TaskManager = () => {
  const [events, setEvents] = useState([]); // Event state

  const handleAddTask = () => {
    const newEvent = { id: Date.now(), name: 'New Task' }; // Create new task
    setEvents((prevEvents) => [...prevEvents, newEvent]); // Add to state
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
