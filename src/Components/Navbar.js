import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return ( 
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <Link className="navbar-brand fs-1 fst-italic p-3" to="/">Foodie</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <Link className="nav-Link p-3 text-white text-decoration-none" to="/">Home <span className="sr-only"></span></Link>
      </li>     
      <li className="nav-item">
        <Link className="nav-Link text-white text-decoration-none" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-Link text-white text-decoration-none p-3" to="/Signup">Signup</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}
