import React from 'react'
import Header from './components/Header';
import Grid from '@mui/material/Grid';
import JournalInput from './components/JournalInput';
import TaskInput from './components/TaskInput';

const App = () => {
  return (

    <div>
      <Header />

      <Grid container spacing={2}>
      <Grid item xs={6}>
        <JournalInput/>
      </Grid>
      <Grid item xs={6}>
        <TaskInput/>
      </Grid>
      </Grid>
    </div>

  )
}

export default App;