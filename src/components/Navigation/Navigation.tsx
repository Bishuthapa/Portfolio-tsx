import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle"; // Adjust path if needed

function Navigation() {
  return (
<nav className="transition-colors duration-500 bg-white dark:bg-black text-gray-900 dark:text-white">

<div className="flex justify-between items-center p-6 max-w-screen-xl mx-auto w-full font-bold text-2xl text-gray-900 dark:text-white transition-colors duration-500">

        {/* Left: Brand */}
        <ul className="mr-15">
          <li>
            <NavLink to="/" className="hover:opacity-80">Bishesh</NavLink>
          </li>
        </ul>

        {/* Right: Links + Theme Toggle */}
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-base">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-2 underline-offset-4 transition-all duration-200"
                    : "hover:underline"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-2 underline-offset-4 transition-all duration-200"
                    : "hover:underline"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blank"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-2 underline-offset-4 transition-all duration-200"
                    : "hover:underline"
                }
              >
                Blank
              </NavLink>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
