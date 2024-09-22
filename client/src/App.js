import React, { useEffect } from 'react';
import './App.css';
import Header from './Comp/Header/Header';
import Home from './Comp/Home/Home';
import Checkout from './Comp/Checkout/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Comp/login/Login';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Payment from './Comp/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Order from './Comp/Orders/Orders';
import Footer from './Comp/Footer/Footer';



const promise = loadStripe('pk_test_51Q1SGlEV3gLR2BISesJ5NHpGumlxFe4inyhkVUl6QGctdcZ8rN7aURzbbtbpFLVEY1inedKksumKOsi17zywHw7Y00lMvGvmXB');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log('The user is', authUser);

      if (authUser) {
        // The user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // The user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        {/* The Header is outside the Routes to appear on every page */}
        <Header />
        <Routes>
    <Route path='/orders' element={<Order/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
