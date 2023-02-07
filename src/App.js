import React from 'react';
import './Portfolio.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChatApp from './pages/projects/Chat';
import FacebookClone from './pages/projects/FacebookClone';
import ToDos from './pages/projects/ToDos';

const App = () => {
  return ( 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/chat' element={<ChatApp/>}/>
      <Route path='/facebookclone' element={<FacebookClone/>}/>
      <Route path='/todos' element={<ToDos/>}/>
    </Routes>
   );
}
 
export default App;