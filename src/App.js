import React, { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import HomePage from './components/VideoCall/pages/Home';
import RoomPage from './components/VideoCall/pages/Room';

function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/room/:roomId' element={<RoomPage/>}/>

    </Routes>
    </div>
  );
}

export default App;
