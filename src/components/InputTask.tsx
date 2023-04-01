import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputTask = () => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter a task:" id="fullWidth" />
    </Box>
  );
};

export default InputTask;
