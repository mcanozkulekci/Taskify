import { Typography } from '@mui/material';
import React from 'react';
import Task from '../types/Task';
import SingleTask from './SingleTask';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }: TaskListProps) => {
  return (
    <div className="tasks">
      <Typography variant="h6">Tasks</Typography>
      {tasks.map((task) => (
        <SingleTask task={task} key={task.id} />
      ))}
    </div>
  );
};

export default TaskList;
