

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashBoard from './Components/DashBoard';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import NavbarDashboard from './Layout/NavbarDashboard';
import NavbarHome from './Layout/NavbarHome';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic, set isLoggedIn to true if login is successful
    setIsLoggedIn(true);
  };

  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path='/dashboard' element={<DashBoard/>}/>
      <Route exact path='/navbarDashboard' Component={<NavbarDashboard/>}/>
      <Route exact path='/navbarHome' Component={<NavbarHome/>}/>
    </Routes>
  </Router>

  );
}

export default App;
