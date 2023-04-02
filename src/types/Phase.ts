import { Task } from './Task';

export class Phase {
  id: number | undefined;
  tasks: Task[] | undefined;
  isDone: boolean | undefined;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.task) this.tasks = initializer.tasks;
    if (initializer.isDone) this.isDone = initializer.isDone;
  }
}
