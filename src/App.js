import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>

        <Routes>
          <Route  path="/" element={<Homepage/>} ></Route>
          <Route   path='/shop' element={<ShopPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
