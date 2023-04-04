import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import Task from '../types/Task';
import { CheckBox } from '@mui/icons-material';

interface SingleTaskProps {
  task: Task;
}

const SingleTask: React.FC<SingleTaskProps> = ({ task }: SingleTaskProps) => {
  const [checked, setChecked] = useState<boolean>(task.completed);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const completed = event.target.checked;
    setChecked(completed);
    task.completed = completed;
  };
  console.log(task.completed);

  useEffect(() => {}, [checked]);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textDecoration: checked ? 'line-through' : 'transparent',
      }}
    >
      <Box sx={{ mr: 1 }}>
        <Typography variant="body1">{task.task}</Typography>
      </Box>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        sx={{ marginLeft: '125px' }}
      />
    </Box>
  );
};

export default SingleTask;
