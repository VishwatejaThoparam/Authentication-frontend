
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState } from 'react';
import axiosInstance from '../../assert/api';
import Home from '../Home';
import { Link } from 'react-router-dom';



const SignUp = () => {
  const [signUpData, setSignUpData] = useState({ name: '', username: '', email: '', password: '' });
  const [signUpError, setSignUpError] = useState('');
  const[isSignUp,setisSignUp] =useState(false)

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.post('/auth/signup', signUpData);
      console.log('User login :', response.data);
      // You can redirect the user or perform other actions upon successful signup
     setisSignUp(true)
  
    } catch (error) {
      setSignUpError('Invalid Username & Password ,Error signing up. Please try again.');
    }
  };
  if(isSignUp){
  
    return <Home/>;
  }

  return (
 <div>
  {signUpError && <p style={{ color: 'red' }}>{signUpError}</p>}
  <div className="container d-flex justify-content-center align-items-center vh-150">
    <form className="p-5 rounded shadow-lg" style={{ "width": "50%" }} onSubmit={handleSignUpSubmit}>
      <h2 className="text-center mb-4">Sign Up</h2>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">Name</label>
        <input type="text" className="form-control" id="nameInput" placeholder="Name" value={signUpData.name} onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })} />
      </div>
      <div className="mb-3">
        <label htmlFor="usernameInput" className="form-label">Username</label>
        <input type="text" className="form-control" id="usernameInput" placeholder="Username" value={signUpData.username} onChange={(e) => setSignUpData({ ...signUpData, username: e.target.value })} required />
      </div>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">Email</label>
        <input type="email" className="form-control" id="emailInput" placeholder="Email" value={signUpData.email} onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })} />
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">Password</label>
        <input type="password" className="form-control" id="passwordInput" placeholder="Password" value={signUpData.password} onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })} required />
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
      <Link to={"/"}><button type="submit" className="btn btn-primary mx-3">back to Home</button></Link>
    </form>
  </div>
</div>





    // <div>
    //   <h2>Sign Up</h2>
    //   {signUpError && <p style={{ color: 'red' }}>{signUpError}</p>}
    //   <form onSubmit={handleSignUpSubmit}>
    //     <input type="text" placeholder="Name" value={signUpData.name} onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })} />
    //     <input type="text" placeholder="Username" value={signUpData.username} onChange={(e) => setSignUpData({ ...signUpData, username: e.target.value })} />
    //     <input type="email" placeholder="Email" value={signUpData.email} onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })} />
    //     <input type="password" placeholder="Password" value={signUpData.password} onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })} />
    //     <button type="submit">Sign Up</button>
        
    //   </form>
    // </div>
  );
};

export default SignUp;
