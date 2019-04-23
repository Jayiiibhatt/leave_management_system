import React from 'react'

const EmployeeLinks = () => {
  return (
    <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <a className="nav-link blue-text" href="#">Dashboard <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
        <a className="nav-link blue-text" href="#">Leave Apply</a>
        </li>
    </ul>
  )
}

export default EmployeeLinks;
