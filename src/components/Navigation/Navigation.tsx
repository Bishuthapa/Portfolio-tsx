import { NavLink } from "react-router-dom";

import { useEffect } from "react";

function Navigation() {



    return (
        <nav>
            <div className="flex justify-between p-6 lg:px-70 w-full font-bold text-2xl">
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
                    <li>
                        <NavLink to="/blank"
                            className={({ isActive }) =>
                                isActive ? "underline decoration-2 underline-offset-3 transition-all duration-200" : ""
                            }
                        >Blank</NavLink>
                    </li>
                    <li>
                        <button type="button" className="hs-dark-mode-active:hidden block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200" data-hs-theme-click-value="dark">
                            <span className="group inline-flex shrink-0 justify-center items-center size-9">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </svg>
                            </span>
                        </button>
                        <button type="button" className="hs-dark-mode-active:block hidden hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200" data-hs-theme-click-value="light">
                            <span className="group inline-flex shrink-0 justify-center items-center size-9">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M12 2v2"></path>
                                    <path d="M12 20v2"></path>
                                    <path d="m4.93 4.93 1.41 1.41"></path>
                                    <path d="m17.66 17.66 1.41 1.41"></path>
                                    <path d="M2 12h2"></path>
                                    <path d="M20 12h2"></path>
                                    <path d="m6.34 17.66-1.41 1.41"></path>
                                    <path d="m19.07 4.93-1.41 1.41"></path>
                                </svg>
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
