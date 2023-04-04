import React from 'react';
import Phase from '../types/Phase';
import TaskList from './TaskList';

interface PhaseListProps {
  phases: Phase[];
}

const PhaseList = ({ phases }: PhaseListProps) => {
  return (
    <div>
      {phases.map((phase) => (
        <div key={phase.id}>
          <h2>{phase.phase}</h2>
          <TaskList tasks={phase.tasks} />
        </div>
      ))}
    </div>
  );
};

export default PhaseList;
