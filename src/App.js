import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import Login from './components/Authenticate/Login';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <Router>
    <Routes>

      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
