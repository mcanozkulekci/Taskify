import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Phase from '../types/Phase';
import SingleTask from './SingleTask';
import TaskList from './TaskList';

interface PhaseListProps {
  phases: Phase[];
}

const PhaseList = ({ phases }: PhaseListProps) => {
  return (
    <div>
      <Grid container justifyContent="center" spacing={2}>
        {phases.map((phase) => (
          <>
            <Grid item key={phase.id}>
              {' '}
              <Paper sx={{ p: 2 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {phase.phase}
                </Typography>
                <Box>
                  <TaskList tasks={phase.tasks} />
                </Box>
                <b></b>
              </Paper>
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
};

export default PhaseList;
