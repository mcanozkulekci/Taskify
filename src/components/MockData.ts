import State from '../types/State';

const mockData: State = {
  phases: [
    {
      id: 1,
      phase: 'Phase 1',
      tasks: [
        {
          id: 1,
          task: 'Task 1.1',
          completed: true,
        },
        {
          id: 2,
          task: 'Task 1.2',
          completed: false,
        },
        {
          id: 3,
          task: 'Task 1.3',
          completed: false,
        },
      ],
      done: false,
    },
    {
      id: 2,
      phase: 'Phase 2',
      tasks: [
        {
          id: 4,
          task: 'Task 2.1',
          completed: false,
        },
        {
          id: 5,
          task: 'Task 2.2',
          completed: true,
        },
      ],
      done: false,
    },
    {
      id: 3,
      phase: 'Phase 3',
      tasks: [
        {
          id: 6,
          task: 'Task 3.1',
          completed: true,
        },
      ],
      done: false,
    },
  ],
};

export default mockData;
