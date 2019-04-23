import React from 'react'

const ManagerLinks = () => {
  return (
    <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <a className="nav-link blue-text" href="#">Dashboard <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
        <a className="nav-link blue-text" href="#">Employee</a>
        </li>
        <li className="nav-item">
        <a className="nav-link blue-text" href="#">Articles</a>
        </li>
    </ul>
  )
}

export default ManagerLinks;
