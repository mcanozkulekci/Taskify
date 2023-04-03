import React, { useCallback, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import TaskList from './components/TaskList';
import PhaseList from './components/PhaseList';
import mockData from './components/MockTasks';
import Task from './types/Task';

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  // const [phaseList, setPhaseList] = useState<TaskList[]>([]);

  return (
    <div className="App" style={{ justifyContent: 'center', display: 'flex' }}>
      <Box
        sx={{
          width: '100%',
          maxWidth: 500,
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Taskify
        </Typography>
        <PhaseList />
        {/* <TaskList tasks={mockData} setTasks={setTasks} phase={1} /> */}
      </Box>
    </div>
  );
};

export default App;
