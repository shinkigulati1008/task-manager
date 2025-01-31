import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Task from './Task';
import AddTask from './AddTask';
import '../App.css';

const socket = io('http://localhost:5000'); // Backend URL

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    socket.on('tasks', (updatedTasks) => {
      setTasks(updatedTasks);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <AddTask socket={socket} />
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;