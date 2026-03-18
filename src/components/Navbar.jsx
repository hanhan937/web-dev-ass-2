import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/games", label: "Play" },
  { to: "/rules", label: "Rules" },
  { to: "/scores", label: "Scores" },
  { to: "/login", label: "Login" },
  { to: "/register", label: "Register" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        <span>Sudoku Master</span>
      </NavLink>
      <ul className="nav-links">
        {navItems.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
