import React from 'react';

import Typography from '@mui/material/Typography';
import InputTask from './components/InputTask';
import { Box } from '@mui/material';
function App() {
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
        <InputTask></InputTask>
      </Box>
    </div>
  );
}

export default App;
