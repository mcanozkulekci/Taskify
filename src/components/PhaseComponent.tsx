import React from 'react';
import Phase from '../types/Phase';
import TaskComponent from './TaskComponent';
import { Typography } from '@mui/material';
import Task from '../types/Task';

interface PhaseProps {
  phase: Phase;
  tasks: Task[];
  onPhaseComplete: (id: number) => void;
  onPhaseNotComplete: (id: number) => void;
}

const PhaseComponent = ({
  phase,
  tasks,
  onPhaseComplete,
  onPhaseNotComplete,
}: PhaseProps) => {
  const handlePhaseComplete = () => {
    onPhaseComplete(phase.id);
  };

  const handlePhaseNotComplete = () => {
    onPhaseNotComplete(phase.id);
  };
  return (
    <div>
      <Typography variant="h5">
        <div>{phase.name}</div>
      </Typography>
      <TaskComponent
        tasks={tasks}
        phase={phase}
        key={phase.id}
        handlePhaseNotComplete={handlePhaseNotComplete}
        handlePhaseComplete={handlePhaseComplete}
      />
    </div>
  );
};

export default PhaseComponent;
