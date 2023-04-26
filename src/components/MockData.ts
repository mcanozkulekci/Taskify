import State from '../types/State';

const mockData: State = {
  phases: [
    {
      id: 1,
      name: 'Phase 1',
      tasks: [
        {
          id: 1,
          name: 'Task 1.1',
          completed: true,
        },
        {
          id: 2,
          name: 'Task 1.2',
          completed: false,
        },
        {
          id: 3,
          name: 'Task 1.3',
          completed: false,
        },
      ],
      done: false,
    },
    {
      id: 2,
      name: 'Phase 2',
      tasks: [
        {
          id: 4,
          name: 'Task 2.1',
          completed: false,
        },
        {
          id: 5,
          name: 'Task 2.2',
          completed: true,
        },
      ],
      done: false,
    },
    {
      id: 3,
      name: 'Phase 3',
      tasks: [
        {
          id: 6,
          name: 'Task 3.1',
          completed: true,
        },
        {
          id: 7,
          name: 'Task 3.',
          completed: true,
        },
      ],
      done: false,
    },
  ],
};

export default mockData;
