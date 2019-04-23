import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark White scrolling-navbar mb-5">
        <Link to="/" className="navbar-brand blue-text">
            <strong>LMS</strong>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        
        <SignedOutLinks />
        <SignedInLinks />
    </nav>
  )
}

export default Navbar;
