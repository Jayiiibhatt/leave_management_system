import React from 'react'
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <NavLink className="nav-link blue-text" to="/signin">LogIn</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link blue-text" to="/register">Register</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default SignedOutLinks;
