import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route  path="/" element={<Homepage/>} ></Route>
          <Route path='/shop' element={<ShopPage />}></Route>
          <Route path='/Signin' element={<SignInAndSignUpPage></SignInAndSignUpPage>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
