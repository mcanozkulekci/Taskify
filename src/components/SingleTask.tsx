import React, { useState } from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import Task from '../types/Task';
import { CheckBox } from '@mui/icons-material';

interface SingleTaskProps {
  task: Task;
}

const SingleTask: React.FC<SingleTaskProps> = ({ task }: SingleTaskProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ mr: 1 }}>
        <Typography variant="body1">{task.task}</Typography>
      </Box>
      <Checkbox checked={checked} onChange={handleChange} />
    </Box>
  );
};

export default SingleTask;
