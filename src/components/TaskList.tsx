import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Task from '../types/Task';
import SingleTask from './SingleTask';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }: TaskListProps) => {
  return (
    <List>
      <ListItemButton>
        <ListItemText
          primary={
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Tasks
            </Typography>
          }
        />
      </ListItemButton>
      <List component="div" disablePadding>
        {tasks.map((task) => (
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItem>
              <SingleTask task={task} key={task.id} />
            </ListItem>
          </ListItemButton>
        ))}
        {tasks.length === 0 && (
          <Typography variant="subtitle1">No tasks found</Typography>
        )}
      </List>
    </List>
  );
};

export default TaskList;
