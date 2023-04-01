import React from 'react';
import { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  return <pre>{JSON.stringify(tasks, null, ' ')}</pre>;
};

export default TaskList;
