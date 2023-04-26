import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box, Card } from '@mui/material';
import mockData from './components/MockData';
import PageComponent from './components/PageComponent';
const App: React.FC = () => {
  // Global state for phases
  const [state, setState] = useState(mockData);

  return (
    <div className="App">
      <Box sx={{ py: 5 }}>
        <Typography
          variant="h1"
          align="center"
          sx={{
            color: '#5E6C84',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          Taskify
        </Typography>
        <PageComponent phases={state.phases} />
      </Box>
    </div>
  );
};

export default App;
