import React from 'react'
import { Link } from 'react-router-dom'


export default function NavbarDashboard() {
  return (


    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="d-flex justify-content-end">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to={"/"}><button className="btn btn-primary btn-sm mx-3" type="submit">Logout</button></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
