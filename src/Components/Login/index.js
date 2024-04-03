
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import axiosInstance from '../../assert/api';
import DashBoard from '../DashBoard';
import { Link } from 'react-router-dom';



const Login = () => {
  const [loginData, setLoginData] = useState({usernameOrEmail: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [islogin, setisLogin] = useState(false);
  
 

  async function handleSignUpSubmit(event) {
    event.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/signin', loginData);
      console.log('User signed up successfully:', response.data);
      setisLogin(true);

      // You can redirect the user or perform other actions upon successful signup
    } catch (error) {
      setLoginError('Error signing up. Please try again.');
    }
  }
  if (islogin) {
    return <DashBoard />;
  }
 

  return (
    <div className='justify-content-center'>
  {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
  <div className="container d-flex justify-content-center align-items-center">
    <form className="p-4 rounded shadow-lg" style={{ "width": "30%" }} onSubmit={handleSignUpSubmit}>
      <h2 className="text-center mb-4">Login</h2>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Username" value={loginData.usernameOrEmail} onChange={(e) => setLoginData({ ...loginData, usernameOrEmail: e.target.value })} required />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" placeholder="Password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} required />
      </div>
      <div className='mx-3'>
        <button type="submit" className="btn btn-primary m-0">Login</button>
        <Link to={"/signup"}><button className="btn btn-secondary m-3">SignUp</button></Link>
      </div>
    </form>
  </div>
</div>

  );
};

export default Login;
