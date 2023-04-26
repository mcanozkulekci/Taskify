import React from 'react';
import Phase from '../types/Phase';
import TaskComponent from './TaskComponent';
import { Typography } from '@mui/material';
import Task from '../types/Task';

interface PhaseProps {
  phase: Phase;
  tasks: Task[];
  done: boolean;
}

const PhaseComponent = ({ phase, tasks }: PhaseProps) => {
  return (
    <div>
      <Typography variant="h5">
        <div>{phase.name}</div>
      </Typography>
      <TaskComponent tasks={tasks} />
      {/* <TaskComponent tasks={phase.tasks} /> */}
    </div>
  );
};

export default PhaseComponent;
