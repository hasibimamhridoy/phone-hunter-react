import React from "react";
import { Link, NavLink, useLoaderData, useOutletContext } from "react-router-dom";
import {
  ArrowRightOnRectangleIcon,
  BookmarkIcon,
  HeartIcon,
  HomeIcon,
  InformationCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
const MobileNav = ({ cart, favorite }) => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-400 flex p-2 mx-2 rounded-lg gap-2"
                    : "flex hover:bg-gray-100 p-2 mx-2 rounded-lg gap-2"
                }
              >
                <div className="flex items-center gap-2">
                  <HomeIcon className="h-5 w-5 text-blue-500"></HomeIcon>
                  <h1>Home</h1>
                </div>
              </NavLink>

              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-400 flex p-2 mx-2 rounded-lg gap-2"
                    : "flex hover:bg-gray-100 p-2 mx-2 rounded-lg gap-2"
                }
              >
                <div className="flex gap-2">
                  <ShoppingCartIcon className="h-5 w-5 text-blue-500"></ShoppingCartIcon>
                  <h1>Orders</h1>
                  <span>({cart.length})</span>
                </div>
              </NavLink>

              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-400 flex p-2 mx-2 rounded-lg gap-2"
                    : "flex hover:bg-gray-100 p-2 mx-2 rounded-lg gap-2"
                }
              >
                <div className="flex gap-2">
                  <HeartIcon className="h-5 w-5 text-blue-500"></HeartIcon>
                  <h1>Favorites ({favorite.length})</h1>
                </div>
              </NavLink>

              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-400 flex p-2 mx-2 rounded-lg gap-2"
                    : "flex hover:bg-gray-100 p-2 mx-2 rounded-lg gap-2"
                }
              >
                <div className="flex gap-2">
                  <ArrowRightOnRectangleIcon className="h-5 w-5 text-blue-500"></ArrowRightOnRectangleIcon>
                  <h1>Login</h1>
                </div>
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-400 flex p-2 mx-2 rounded-lg gap-2"
                    : "flex hover:bg-gray-100 p-2 mx-2 rounded-lg gap-2"
                }
              >
                <div className="flex gap-2">
                  <InformationCircleIcon className="h-5 w-5 text-blue-500"></InformationCircleIcon>
                  <h1>About</h1>
                </div>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/"><a className="btn btn-ghost normal-case text-xl">Phone Hunter</a></Link>
        </div>
        <div className="navbar-end">

          <Link to='/favorites'>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <HeartIcon className="w-7 h-8 text-red-500"></HeartIcon>
              <span className="badge badge-xs badge-primary indicator-item">{favorite.length}</span>
            </div>
          </button></Link>
          <Link to='/orders'>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <ShoppingCartIcon className="w-6 h-8 text-black"></ShoppingCartIcon>
              <span className="badge badge-xs badge-primary indicator-item">{cart.length}</span>
            </div>
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
