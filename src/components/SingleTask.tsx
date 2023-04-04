import React, { useState } from 'react';
import { Checkbox } from '@mui/material';
import Task from '../types/Task';

interface SingleTaskProps {
  task: Task;
}

const SingleTask = ({ task }: SingleTaskProps) => {
  return <li>{task.task}</li>;
};

export default SingleTask;
