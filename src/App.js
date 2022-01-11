import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from "./firebase/firebase.utils"
import { useState, useEffect ,useRef} from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubcribeFromAuth = null;
  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }
  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} ></Header>
        <Routes>
          <Route path="/" element={<Homepage />} ></Route>
          <Route path='/shop' element={<ShopPage />}></Route>
          <Route path='/Signin' element={<SignInAndSignUpPage></SignInAndSignUpPage>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
