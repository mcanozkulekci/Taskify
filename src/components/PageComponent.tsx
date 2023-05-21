import { useEffect, useState } from 'react';
import Phase from '../types/Phase';
import PhaseComponent from './PhaseComponent';
import { Grid } from '@mui/material';
import Task from '../types/Task';
interface PageProps {
  phases: Phase[];
}

const PageComponent = ({ phases }: PageProps) => {
  const [currentPhases, setCurrentPhases] = useState(phases);

  const unlockNextPhase = (id: number) => {
    const newPhases = [...currentPhases];
    const index = newPhases.findIndex((phase) => phase.id === id);
    newPhases[index].locked = false;
    setCurrentPhases(newPhases);
  };

  const onPhaseComplete = (id: number) => {
    const newPhases = [...currentPhases];
    const index = newPhases.findIndex((phase) => phase.id === id);
    newPhases[index].done = true;
    setCurrentPhases(newPhases);
    unlockNextPhase(id + 1);
  };

  const lockNextPhase = (id: number) => {
    const newPhases = [...currentPhases];
    const index = newPhases.findIndex((phase) => phase.id === id);
    newPhases[index].locked = true;
    setCurrentPhases(newPhases);
  };

  const onPhaseNotComplete = (id: number) => {
    const newPhases = [...currentPhases];
    const index = newPhases.findIndex((phase) => phase.id === id);
    newPhases[index].done = false;
    setCurrentPhases(newPhases);
    lockNextPhase(id + 1);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {phases.map((phase) => {
          if (phase.locked) {
            return <></>;
          }
          return (
            <PhaseComponent
              phase={phase}
              tasks={phase.tasks}
              onPhaseComplete={onPhaseComplete}
              onPhaseNotComplete={onPhaseNotComplete}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default PageComponent;
