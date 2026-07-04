import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "Apologia", to: "/apologia" },
  { label: "Theologica", to: "/theologica" },
  { label: "Ecclesiastica", to: "/ecclesiastica" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside the nav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav ref={navRef} className={hidden ? "nav--hidden" : ""}>
      <div
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
        {links.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
