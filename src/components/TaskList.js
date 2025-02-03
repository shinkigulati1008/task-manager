import React, { useEffect, useState } from 'react';
import { db, collection, onSnapshot } from '../firebase';
import Task from './Task';
import AddTask from './AddTask';
import '../App.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Listen for real-time updates from Firestore
    const unsubscribe = onSnapshot(collection(db, 'tasks'), (snapshot) => {
      const tasksData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksData);
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <AddTask />
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;