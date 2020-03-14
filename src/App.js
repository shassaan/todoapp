import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <MainContent/>
      <Footer>
        CopyRight {Date.now('Y')}
      </Footer>
    </div>
  );
}

export default App;
