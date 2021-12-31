import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>

        <Routes>
          <Route  path="/" element={<Homepage/>} ></Route>
          <Route   path='/hats' element={<HatsPage/>}></Route>
        </Routes>





    </div>
  );
}

export default App;
