import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import PhaseList from './components/PhaseList';
import mockData from './components/MockData';

const App: React.FC = () => {
  const [state, setState] = useState(mockData);

  return (
    <div className="App" style={{ justifyContent: 'center', display: 'flex' }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 500,
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          style={{
            display: 'flex',
            justifyContent: 'center',
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
