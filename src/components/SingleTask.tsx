import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import Task from '../types/Task';

interface SingleTaskProps {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<SingleTaskProps> = ({
  task,
  tasks,
  setTasks,
}: SingleTaskProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleDone = (id: number | undefined) => {
    // Taskin  oldugu list degisiir ve icindeki tasklaroin  idsi, handleDone fonksiyonuna
    // parametre olarak gelen idye esit olan taskin butun bilgileri ayni kalirken diger kosulda
    // isDone attribute u tam tersine doner.

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.completed } : task
      )
    );
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  console.log(task.completed);
  return (
    <form style={{ justifyContent: 'space-between', display: 'flex' }}>
      <span>{task.task}</span>
      <div>
        {task.completed ? (
          <Checkbox
            checked={!checked}
            onChange={handleChange}
            onClick={() => handleDone(task.id)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        ) : (
          <Checkbox
            checked={checked}
            onChange={handleChange}
            onClick={() => handleDone(task.id)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        )}
      </div>
    </form>
  );
};

export default SingleTask;
