import React from 'react';
import Phase from '../types/Phase';
import TaskComponent from './TaskComponent';
import { Typography } from '@mui/material';
import Task from '../types/Task';
import mockData from './MockData';

interface PhaseProps {
  phase: Phase;
  tasks: Task[];
}

const PhaseComponent = ({ phase, tasks }: PhaseProps) => {
  return (
    <div>
      <Typography variant="h5">
        <div>{phase.name}</div>
      </Typography>
      <TaskComponent tasks={tasks} phase={phase} mockData={mockData} />
      {/* <TaskComponent tasks={phase.tasks} /> */}
    </div>
  );
};

export default PhaseComponent;
