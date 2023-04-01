import React from 'react';
import { Task } from '../types/Task';

interface SingleTaskProps {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SingleTask = ({ task, tasks, setTasks }: SingleTaskProps) => {
  return;
};

export default SingleTask;
