import { useEffect, useState } from 'react';
import Phase from '../types/Phase';
import PhaseComponent from './PhaseComponent';
import { Grid } from '@mui/material';
import Task from '../types/Task';
interface PageProps {
  phases: Phase[];
}

const PageComponent = ({ phases }: PageProps) => {
  //    if (phase.id === index + 1 && index > 0 && phases[index - 1].done)
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  useEffect(() => {
    const currentPhase = phases[currentPhaseIndex];
    const completedAllTasks = currentPhase.done;

    if (completedAllTasks && currentPhaseIndex < phases.length - 1) {
      console.log('hello');
      setCurrentPhaseIndex(currentPhaseIndex + 1);
    }
  }, [currentPhaseIndex, phases]);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {phases.map((phase, index) => {
          if (index <= currentPhaseIndex) {
            return <PhaseComponent phase={phase} tasks={phase.tasks} />;
          }
        })}
      </Grid>
    </div>
  );
};

export default PageComponent;
