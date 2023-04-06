import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Phase from '../types/Phase';
import Task from '../types/Task';
import TaskList from './TaskList';

interface PhaseListProps {
  phases: Phase[];
}

interface PhaseStatus {
  id: number;
  completed: boolean;
}

const PhaseList = ({ phases }: PhaseListProps) => {
  const [phaseStatuses, setPhaseStatuses] = useState<PhaseStatus[]>(
    // At the beginning, all the phases are uncompleted
    phases.map((phase) => ({ id: phase.id, completed: false }))
  );

  const phaseWithIdOne = phases.filter((phase) => phase.id === 1);

  return (
    <>
      {phaseWithIdOne !== undefined && (
        <Grid container justifyContent="center" spacing={12}>
          {phaseWithIdOne.map((phase) => (
            <Grid
              item
              key={phase.id}
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Paper
                sx={{
                  p: 2,
                  width: '100%',
                  borderRadius: '10px',
                  backgroundColor: '#f2f2f2',
                  transition: '0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#e0e0e0',
                  },
                }}
              >
                <List sx={{ padding: 0 }}>
                  <ListItemButton
                    sx={{
                      mb: 1,
                      borderRadius: '5px',
                      backgroundColor: '#3f51b5',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#303f9f',
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="h5"
                          color="inherit"
                          align="center"
                          sx={{ fontWeight: 'bold' }}
                        >
                          {phase.phase}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </List>
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    boxShadow:
                      '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
                    overflow: 'hidden',
                  }}
                >
                  <TaskList tasks={phase.tasks} />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default PhaseList;
