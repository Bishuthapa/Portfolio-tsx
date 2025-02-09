import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <nav>
            <div className="flex justify-center px-40 py-20 w-full bg-zinc-900 text-white font-bold text-2xl ">
                <div>
                    <ul className="flex gap-10">
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "underline decoration-2 underline-offset-7 transition-all duration-200"
                                        : ""
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
                                        ? "underline decoration-2 underline-offset-7 transition-all duration-200"
                                        : ""
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) =>
                                    isActive
                                        ? "underline decoration-2 underline-offset-7 transition-all duration-200"
                                        : ""
                                }
                            >
                                Contacts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/privacy-policy"
                                className={({ isActive }) =>
                                    isActive
                                        ? "underline decoration-2 underline-offset-7 transition-all duration-200"
                                        : ""
                                }
                            >
                                Privacy Policy
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-5 justify-center py-4 mb-10  bg-zinc-900">
                <a
                    href="https://github.com/bishuthapa"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-blue-500 hover:underline"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.699 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.565 4.935.36.31.682.92.682 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/bishu-t-53b239277/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-blue-500 hover:underline"
                    >
                        <path
                            fillRule="evenodd"
                            d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.38-.56-2.5-2-2.5s-2 1.12-2 2.5v5.5h-3v-10h3v1.5c.44-.66 1.22-1.5 2.5-1.5 2.5 0 3.5 1.5 3.5 4v6z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
                <a 
                href="mailto:bishuthapa570@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-blue-500 hover:underline"
                    >
                        <path
                            fillRule="evenodd"
                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </div>
        </nav>
    );
}

export default Footer;