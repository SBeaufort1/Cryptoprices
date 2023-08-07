import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import Currencies from './pages/Currencies';
import Price from './pages/Price';
import "./App.css";



export default function App() {
  //use the Route component to specify each route
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/currencies' element={<Currencies/>}/>
        <Route path='/price' element={<Price/>}/>
      </Routes>
    </div>
  );
}
