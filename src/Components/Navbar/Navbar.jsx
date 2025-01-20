import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = (
        <>
            <a><NavLink to="/">Home</NavLink></a>
            <a><NavLink to="/Listed-Books">Listed Books</NavLink></a>
            <a><NavLink to="/Pages-to-Read">Pages to Read</NavLink></a>
            <a><NavLink to="/Features">Features</NavLink></a>
            <a><NavLink to="/New-Published">New Published</NavLink></a>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-primary lg:hidden ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box   z-[1] mt-3 w-52 p-2  shadow"
                        >
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-anton">Book Fist</a>
                </div>
                <div className="navbar-center hidden lg:flex gap-x-4">
                    {links}
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
