import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import PhaseList from './components/PhaseList';
import mockData from './components/MockData';
import Task from './types/Task';

const App: React.FC = () => {
  const [state, setState] = useState(mockData);
  const [isPhaseDone, setIsPhaseDone] = useState(
    Array(mockData.phases.length).fill(false)
  );

  return (
    <div
      className="App"
      style={{ backgroundColor: '#F0F2F5', minHeight: '100vh' }}
    >
      <Box sx={{ py: 5 }}>
        <Typography
          variant="h1"
          gutterBottom
          align="center"
          sx={{
            color: '#5E6C84',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          Taskify
        </Typography>
        <PhaseList phases={state.phases} />
      </Box>
    </div>
  );
};

export default App;
