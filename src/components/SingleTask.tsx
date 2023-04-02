import React from 'react';
import { Task } from '../types/Task';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

interface SingleTaskProps {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask: React.FC<SingleTaskProps> = ({
  task,
  tasks,
  setTasks,
}: SingleTaskProps) => {
  return (
    <form
      action=""
      style={{ justifyContent: 'space-between', display: 'flex' }}
    >
      <span>{task.task}</span>
      <div>
        <span className="icon">
          <EditIcon />
        </span>
        <span className="icon">
          {' '}
          <DeleteIcon />
        </span>
        <span className="icon">
          <DoneIcon />
        </span>
      </div>
    </form>
  );
};

export default SingleTask;
