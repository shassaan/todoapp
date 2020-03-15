import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import { TaskContext } from './Context/TaskContext'

function App() {
  const taskHook = useState(0);
  return (
    <div className="container-fluid">
      <Header />
      <TaskContext.Provider value={taskHook}>
        <MainContent />
      </TaskContext.Provider>
      <Footer>
        CopyRight {new Date().getFullYear()}
      </Footer>
    </div>
  );
}

export default App;
