import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="flex justify-between p-6 lg:px-70 w-full bg-zinc-900 text-white font-bold text-2xl">
                <ul className="mr-15">
                    <li>
                        <NavLink to="/"
                         
                        >Bishesh</NavLink>
                    </li>
                </ul>
                <ul className="flex gap-10">
                    <li>
                        <NavLink to="/about"
                        className={({ isActive }) =>
                            isActive ? "underline decoration-2 underline-offset-3 transition-all duration-200" : ""
                        }
                        >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog"
                        className={({ isActive }) =>
                            isActive ? "underline decoration-2 underline-offset-3 transition-all duration-200" : ""
                        }
                        >Blog</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
