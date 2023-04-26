import Task from './Task';

interface Phase {
  id: number;
  name: string;
  tasks: Task[];
  done: boolean;
}

export default Phase;
