import React, {useState} from 'react'

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';

// react router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// react toastify
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"

// firebase
import firebase from 'firebase/app'
import "firebase/auth"

// components
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import PageNotFound from './pages/PageNotFound'
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer'
import Header from './layout/Header'

import FirebaseConfig from './config/FirebaseConfig'
// init firebase
firebase.initializeApp(FirebaseConfig)

const App = () => {

  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="*" component={PageNotFound}/>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
