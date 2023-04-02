import { Grid } from '@mui/material';
import React from 'react';
import { Task } from '../types/Task';
import SingleTask from './SingleTask';

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  setTasks,
}: TaskListProps) => {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        {tasks.map((task) => (
          <SingleTask
            task={task}
            key={task.id}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default TaskList;
