import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import '../styles/components/Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(open => !open);
    const closeMenu = () => setMenuOpen(false);

    return (
    <header className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
          Jenna Cho`s Website
        </NavLink>

        <button
          className="navbar__toggle"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <nav className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <NavLink
            to="/"
            className="navbar__link"
            activeClassName="navbar__link--active"
            onClick={closeMenu}
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="navbar__link"
            activeClassName="navbar__link--active"
            onClick={closeMenu}
          >
            Meet Mrs. Cho
          </NavLink>
          <NavLink
            to="/teaching-philosophy"
            className="navbar__link"
            activeClassName="navbar__link--active"
            onClick={closeMenu}
          >
            Teaching Philisophy
          </NavLink>
          <NavLink
            to="/portfolio"
            className="navbar__link"
            activeClassName="navbar__link--active"
            onClick={closeMenu}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/student-work"
            className="navbar__link"
            activeClassName="navbar__link--active"
            onClick={closeMenu}
          >
            Student Work Samples
          </NavLink>
          <NavLink
            to="/diverse-classrooms"
            className="navbar__link"
            activeClassName="navbar__link--active"
            onClick={closeMenu}
          >
            Diverse Classrooms
          </NavLink>
          <NavLink
            to="/certification-education"
            className="navbar__link"
            activeClassName="navbar__link--active"
            onClick={closeMenu}
          >
            Certification & Education
          </NavLink>
          <NavLink
            to="/teaching-experience"
            className="navbar__link"
            activeClassName="navbar__link--active"
            onClick={closeMenu}
          >
            Teaching Experience
          </NavLink>
          <NavLink
            to="/contact"
            className="navbar__link"
            activeClassName="navbar__link--active"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}