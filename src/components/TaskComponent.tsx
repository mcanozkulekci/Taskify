import React, { useState } from 'react';

import Task from '../types/Task';
import { Checkbox } from '@mui/material';
interface TaskProps {
  tasks: Task[];
}

const TaskComponent = ({ tasks }: TaskProps) => {
  const [isCompleted, setIsCompleted] = useState<boolean[]>(
    tasks.map((task) => task.completed)
  );

  const handleChange = (index: number) => {
    const newCompleted = [...isCompleted];
    newCompleted[index] = !newCompleted[index];
    setIsCompleted(newCompleted);
    tasks[index].completed = !tasks[index].completed;
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.name}{' '}
          <Checkbox
            checked={isCompleted[index]}
            onChange={() => handleChange(index)}
          />
        </li>
      ))}
    </div>
  );
};

export default TaskComponent;
