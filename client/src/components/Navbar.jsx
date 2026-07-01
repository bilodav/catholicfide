import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setHidden(true); // scrolling down → hide
      } else {
        setHidden(false); // scrolling up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={hidden ? "nav--hidden" : ""}>
      {links.map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
