import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Task from '../types/Task';
import SingleTask from './SingleTask';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface TaskListProps {
  tasks: Task[];
  taskListDone: boolean;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  taskListDone,
}: TaskListProps) => {
  // State to hold the completed status of all tasks
  const [taskStatuses, setTaskStatuses] = useState<boolean[]>(
    // Initialize all task statuses to false;

    tasks.map((task) => false)
  );

  const [allTasksCompleted, setAllTasksCompleted] = useState<boolean>(false);

  const handleTaskChange = (index: number, completed: boolean) => {
    // Copy the taskStatuses array
    const updatedTaskStatuses = [...taskStatuses];
    // Update the completed status of the task at the given index
    updatedTaskStatuses[index] = completed;
    // Update the state with the updated taskStatuses array
    setTaskStatuses(updatedTaskStatuses);

    // Check if all tasks are completed
    if (updatedTaskStatuses.every((status) => status === true)) {
      setAllTasksCompleted(true);
    } else {
      setAllTasksCompleted(false);
    }
    taskListDone = allTasksCompleted;
  };

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
        {tasks.map((task, index) => (
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItem>
              <SingleTask
                task={task}
                key={task.id}
                completed={taskStatuses[index]}
                onChange={(completed: boolean) =>
                  handleTaskChange(index, completed)
                }
              />
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
