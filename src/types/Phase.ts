import Task from './Task';

interface Phase {
  id: number;
  name: string;
  tasks: Task[];
  done: boolean;
  locked: boolean;
}

export default Phase;
