import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from "./firebase/firebase.utils"
import { createUserPorfileDocument } from './firebase/firebase.utils';
import { useState, useEffect } from 'react';
function App () {
  const [currentUser, setcurrentUser] = useState(null);
  useEffect(() => {
    const unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserPorfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setcurrentUser({

              id: snapShot.id,
              ...snapShot.data()

          }, () => {
            console.log(currentUser);
          })
        })
      }
      else {
        this.setState({ currentUser: userAuth });
      }

    });
    return () => {
      unsubcribeFromAuth();
    }
  }, []);






    return (
      <div>
        <Header currentUser={currentUser} ></Header>
        <Routes>
          <Route path="/" element={<Homepage />} ></Route>
          <Route path='/shop' element={<ShopPage />}></Route>
          <Route path='/Signin' element={<SignInAndSignUpPage></SignInAndSignUpPage>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    );

  };


export default App;
