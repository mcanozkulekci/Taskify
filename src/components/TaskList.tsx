import React from 'react';
import Task from '../types/Task';
import SingleTask from './SingleTask';

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  phase: number;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  setTasks,
}: TaskListProps) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <SingleTask
          task={task}
          key={task.id}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};

export default TaskList;
