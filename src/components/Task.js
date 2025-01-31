import React from 'react';
import '../App.css';

const Task = ({ task }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </li>
  );
};

export default Task;