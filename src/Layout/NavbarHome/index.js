import React from 'react'


export default function NavbarHome() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="d-flex justify-content-end">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
          <button className="btn btn-primary btn-sm" type="submit">
            <a className="nav-link" href="/login">Login</a>
          </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary btn-sm mx-3" type="submit">
              <a className="nav-link" href="/signup">Sign Up</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}
