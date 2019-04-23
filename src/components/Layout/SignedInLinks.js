import React from 'react';
import AdminLinks from './AdminLinks';
import ManagerLinks from './ManagerLinks';
import EmployeeLinks from './EmployeeLinks';

const SignedInLinks = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <AdminLinks />
        <ManagerLinks /> 
        <EmployeeLinks /> 

        <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <a className="nav-link blue-text"><i className="fa fa-sign-out"></i></a>
            </li>
        </ul>
    </div>
  )
}

export default SignedInLinks;