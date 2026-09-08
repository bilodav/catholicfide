import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

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
      setHidden(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    <nav ref={navRef} className={hidden ? styles["nav--hidden"] : ""}>
      <div
        className={`${styles["menu-toggle"]} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`${styles["nav-links"]} ${menuOpen ? styles["nav-links--open"] : ""}`}
      >
        {links.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
