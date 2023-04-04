import React from 'react';
import Task from '../types/Task';
import SingleTask from './SingleTask';

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <SingleTask task={task} key={task.id} />
      ))}
    </ul>
  );
};

export default TaskList;
