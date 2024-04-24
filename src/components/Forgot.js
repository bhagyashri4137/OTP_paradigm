import { Link } from 'react-router-dom'
import './Forgot.css'
import React from 'react'

function Forgot() {

  // const image = '"https://www.svgrepo.com/show/369405/lock-circle.svg"';
  return (
     <>
     <div className="row forgot-page">
      <div className='form'>
	  <img src="https://www.svgrepo.com/show/369405/lock-circle.svg"/>
		<h1>Forgot Password</h1>
		<h4 className="information-text">Enter your registered email to reset your password.</h4>
		<div className="form-group">
			<input type="email" name="user_email" id="user_email"/>
			<button >Reset Password</button>
		</div>
		<div className="footer">
			<p>New here? <Link to="/Registration">Register here</Link></p>
			<p>Already have an account? <Link to="/Login">Login</Link></p>
		</div>
    </div>
	</div>
  
     </>
  )
}

export default Forgot