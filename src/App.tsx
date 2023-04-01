import React, { useCallback, useEffect, useState } from 'react';
import { MOCK_TASKS } from './components/MockTasks';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import { Task } from './types/Task';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

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
        <TaskList tasks={MOCK_TASKS} setTasks={setTasks} />
      </Box>
    </div>
  );
};

export default App;
