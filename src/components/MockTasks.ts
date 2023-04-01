import { Task } from '../types/Task';

export const MOCK_TASKS = [
  new Task({
    id: 1,
    task: 'Evi temizle',
    isDone: false,
  }),
  new Task({
    id: 2,
    task: 'Kod yaz',
    isDone: false,
  }),
  new Task({
    id: 3,
    task: 'Copu cikar',
    isDone: true,
  }),
  new Task({
    id: 4,
    task: 'Kedileri besle',
    isDone: false,
  }),
  new Task({
    id: 5,
    task: 'Odani topla',
    isDone: false,
  }),
];
