import React, { useState } from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import Task from '../types/Task';

interface SingleTaskProps {
  task: Task;
}

const SingleTask: React.FC<SingleTaskProps> = ({ task }: SingleTaskProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ mr: 1 }}>
        <Typography variant="body1">{task.task}</Typography>
      </Box>
      {task.completed && (
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            bgcolor: 'success.main',
          }}
        />
      )}
    </Box>
  );
};

export default SingleTask;
