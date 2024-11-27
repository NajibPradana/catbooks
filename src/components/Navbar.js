import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle menu burger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle logout
  const handleLogout = () => {
    // Remove auth token or perform other logout logic
    localStorage.removeItem("authToken");
    navigate("/"); // Redirect to homepage or login page after logout
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        CatBooks
      </Link>

      <div className="navbar-actions">
        <div className="navbar-menu">
          <Link to="/home">Home</Link>
          <Link to="/breeds">Breeds</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </div>

        {/* Button to logout in desktop */}
        <button className="navbar-logout" onClick={handleLogout}>
          Logout
        </button>

        {/* Hamburger button for mobile */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="navbar-menu-mobile">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/breeds" onClick={() => setIsMenuOpen(false)}>Breeds</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>

          {/* Button to logout only in mobile menu */}
          <button className="navbar-logout-mobile" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
