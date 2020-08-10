import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__page">
      <Sidebar/>
      <MainContainer/>
      </div>
    <h1> Hello Youtebe💻</h1>
    </div>
  );
}

export default App;
