import { Task } from '../types/Task';

export const MOCK_TASKS = [
  new Task({
    id: 1,
    task: 'Evi temizle',
    isDone: false,
    phase: 1,
  }),
  new Task({
    id: 2,
    task: 'Kod yaz',
    isDone: false,
    phase: 2,
  }),
  new Task({
    id: 3,
    task: 'Copu cikar',
    isDone: true,
    phase: 3,
  }),
  new Task({
    id: 4,
    task: 'Kedileri besle',
    isDone: false,
    phase: 2,
  }),
  new Task({
    id: 5,
    task: 'Odani topla',
    isDone: false,
    phase: 3,
  }),
];
