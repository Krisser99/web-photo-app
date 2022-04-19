import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import Header from './components/Header/Header'
import './App.scss'
import MainPage from 'features/Photo/pages/Main/MainPage'
import productApi from 'api/productApi'
import SignIn from 'features/Auth/pages/SignIn'

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'))

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);

function App() {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10
        }
        const response = await productApi.getAll(params)
        console.log(response)
        setProductList(response.data)
      } catch (error) {
        console.log('Fail to fetch Api: ', error)
      }

    }

    fetchProductList()
  }, [])

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if(!user) {
        console.log('User is not LogIn')
        return 
      }

      console.log('Logged in by: ', user.displayName)

      const token = await user.getIdToken()

      console.log('Logged in user token: ', token)

    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className='photo-app'>
      <Suspense fallback={<div>Loading....</div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/*' element={<MainPage />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/photos/*' element={<Photo />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
