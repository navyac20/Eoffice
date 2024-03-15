import React from 'react';
import Login from './Login';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Home from './home'; // Update the import statement

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

