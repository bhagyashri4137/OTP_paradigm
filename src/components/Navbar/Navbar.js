import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   
    <>
     <div className='fullpage'>
    <header className="header">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                
                   <div className="collapse navbar-collapse " id="collapsibleNavbar">
                    <div className="navbar-nav ms-auto">
                        <ul>
                            
                            <li><Link className="nav-link active" area-current="page" to="/Login">Login</Link></li>
                            
                            <li><Link className="nav-link" to="/Registration">Registration</Link></li>
                            
                            <li><Link className="nav-link" to="/Forgot">Forgot Password</Link></li>
                            
                            
                            <li><Link className="nav-link" to="/Error">Error</Link></li>
                            
                           
                            <li><Link className="nav-link" to="/Success">Success</Link></li>
                            <li><Link className="nav-link" to="/Success">OTP verification</Link></li>
  
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div className="mobile-navbar-btn">
            <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
            <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
        </div>
    </header>
    </div>
    </>
  )
}

export default Navbar