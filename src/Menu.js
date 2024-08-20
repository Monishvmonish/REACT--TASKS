import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import About from './About';
import Login from './Login';
import App from './App';
 function Menu(){
    return (
        
      <BrowserRouter>
      <App></App>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
    
      </BrowserRouter>
    );
  };
  
  export default Menu
