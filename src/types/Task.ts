export class Task {
  id: number | undefined;
  task: string | undefined;
  isDone: boolean | undefined;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.task) this.task = initializer.task;
    if (initializer.isDone) this.isDone = initializer.isDone;
  }
}
