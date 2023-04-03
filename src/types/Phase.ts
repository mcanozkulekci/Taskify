import Task from './Task';

interface Phase {
  id: number;
  phase: string;
  tasks: Task[];
  done: boolean;
}

export default Phase;
