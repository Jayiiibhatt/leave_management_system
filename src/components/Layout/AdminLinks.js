import React from 'react'

const AdminLinks = () => {
  return (
    <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <a className="nav-link blue-text" href="#">Dashboard <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
        <a className="nav-link blue-text" href="#">Manager</a>
        </li>
        <li className="nav-item">
        <a className="nav-link blue-text" href="#">Employee</a>
        </li>
    </ul>
  )
}

export default AdminLinks;
