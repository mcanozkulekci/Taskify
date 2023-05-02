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
          completed: false,
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
          completed: false,
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
          completed: false,
        },
        {
          id: 7,
          name: 'Task 3.2',
          completed: false,
        },
      ],
      done: false,
    },
    {
      id: 4,
      name: 'Phase 4',
      tasks: [
        {
          id: 8,
          name: 'Task 4.1',
          completed: false,
        },
        {
          id: 9,
          name: 'Task 4.2',
          completed: false,
        },
      ],
      done: false,
    },
    {
      id: 5,
      name: 'Phase 5',
      tasks: [
        {
          id: 10,
          name: 'Task 5.1',
          completed: false,
        },
        {
          id: 11,
          name: 'Task 5.2',
          completed: false,
        },
      ],
      done: false,
    },
    {
      id: 6,
      name: 'Phase 6',
      tasks: [
        {
          id: 12,
          name: 'Task 6.1',
          completed: false,
        },
        {
          id: 13,
          name: 'Task 6.2',
          completed: false,
        },
      ],
      done: false,
    },
    {
      id: 7,
      name: 'Phase 7',
      tasks: [
        {
          id: 14,
          name: 'Task 7.1',
          completed: false,
        },
        {
          id: 15,
          name: 'Task 7.2',
          completed: false,
        },
      ],
      done: false,
    },
  ],
};

export default mockData;
