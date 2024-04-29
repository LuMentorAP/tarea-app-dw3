import React from 'react';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';

const App = () => {
  return (
    <div id="app">
      <TaskList />
    </div>
  );
};

export default App;