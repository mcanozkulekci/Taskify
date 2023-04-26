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
        {phases.map((phase) => (
          <PhaseComponent phase={phase} tasks={phase.tasks} done={false} />
        ))}
      </Grid>
    </div>
  );
};

export default PageComponent;
