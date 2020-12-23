import React from 'react';
import './App.css';
import  Navbar  from './Components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Screens/Home';
import Signup from './Components/Screens/Signup';
import Login from './Components/Screens/Login';
import Profile from './Components/Screens/Profile';
import CreatePost from './Components/Screens/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/signin">
        <Login/>
      </Route>
      <Route path="/create">
        <CreatePost/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
