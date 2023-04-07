import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import Task from '../types/Task';
import { CheckBox } from '@mui/icons-material';

interface SingleTaskProps {
  task: Task;
  completed: boolean;
  onChange: (completed: boolean) => void;
}

const SingleTask: React.FC<SingleTaskProps> = ({
  task,
  completed,
  onChange,
}: SingleTaskProps) => {
  const [taskCompleted, setTaskCompleted] = useState<boolean>(completed);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const completed = event.target.checked;
    setTaskCompleted(completed);
    onChange(completed);
  };
  useEffect(() => {
    setTaskCompleted(completed);
  }, [completed]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textDecoration: taskCompleted ? 'line-through' : 'transparent',
      }}
    >
      <Box sx={{ mr: 1 }}>
        <Typography variant="body1">{task.task}</Typography>
      </Box>
      <Checkbox
        checked={taskCompleted}
        onChange={handleChange}
        sx={{ marginLeft: '125px' }}
      />
    </Box>
  );
};

export default SingleTask;
