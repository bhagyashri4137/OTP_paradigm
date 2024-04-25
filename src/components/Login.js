import "../assets/css/style.css"
import React from 'react';
import { Link } from 'react-router-dom'


const Login =()=> { 
  return (
    <>
    <div className="container login-container">
      <div className="card">
        <form action=''>
          <h2>Login</h2>

          <input type="text" name="username" id="username" placeholder="Username"/>

          <input type="password" name='password' id="password" placeholder="Password"/>
          <div className="box">
            <input type="checkbox"/><label>Remember me</label>
          </div>
          <p>Forgot Password?<Link to='/Forgot'>Click here</Link></p>
          <button type="submit">Login</button>
          <p>Don't have an account? </p>

           <Link to="/Registration">
            Register here
          </Link>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login