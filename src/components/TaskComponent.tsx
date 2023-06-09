import React, { useEffect, useState } from 'react';

import Task from '../types/Task';
import { Checkbox } from '@mui/material';
import Phase from '../types/Phase';
import State from '../types/State';
interface TaskProps {
  tasks: Task[];
  phase: Phase;
  handlePhaseComplete: () => void;
  handlePhaseNotComplete: () => void;
}

const TaskComponent = ({
  tasks,
  phase,
  handlePhaseComplete,
  handlePhaseNotComplete,
}: TaskProps) => {
  const [isCompleted, setIsCompleted] = useState<boolean[]>(
    tasks.map((task) => task.completed)
  );

  const handleChange = (index: number) => {
    // Once hepsini oldugu gibi alir
    const newCompleted = [...isCompleted];
    // Sonra sozkonusu indexin degerini tersine cevirir
    newCompleted[index] = !newCompleted[index];
    // Sonra da state'i gunceller
    setIsCompleted(newCompleted);
    // tasks propunda da ayni guncellemeyi yapar.
    tasks[index].completed = !tasks[index].completed;

    console.log(tasks[index].completed);

    const completedAll = tasks.every((task) => task.completed);

    if (completedAll) {
      handlePhaseComplete();
    } else {
      handlePhaseNotComplete();
    }
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <li key={task.id}>
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
