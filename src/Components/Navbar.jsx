
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm p-4 text-uppercase fw-bolder">
      <div className="container ">
        <NavLink className= 'navbar-brand fs-2 fw-bolder col-md-6 text-white' to="/">Start Framework</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse col-md-6 justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav text-end fs-6">
            <li className="nav-item me-3">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : 'inactive'}`} to="/about">About</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : 'inactive'}`} to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : 'inactive'}`} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
