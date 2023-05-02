import Phase from '../types/Phase';
import PhaseComponent from './PhaseComponent';
import { Grid } from '@mui/material';
interface PageProps {
  phases: Phase[];
}

const PageComponent = ({ phases }: PageProps) => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {phases.map((phase) => {
          if (phase.id === 1) {
            return <PhaseComponent phase={phase} tasks={phase.tasks} />;
          }
        })}
        {phases.map((phase, index) => {
          if (phase.id === index + 1 && index > 0 && phases[index - 1].done) {
            return <PhaseComponent phase={phase} tasks={phase.tasks} />;
          } else {
            return null;
          }
        })}
      </Grid>
    </div>
  );
};

export default PageComponent;
