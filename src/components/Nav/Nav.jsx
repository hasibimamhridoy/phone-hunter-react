import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLoaderData, useOutletContext } from "react-router-dom";
import { ArrowRightOnRectangleIcon, BookmarkIcon, HeartIcon, HomeIcon, InformationCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'





const Nav = ({cart,favorite}) => {


  return (

    <div className="">
    
      <Link to='/'><h1 className="text-center hover:bg-gray-200  my-4 cursor-pointer p-2 m-2 rounded-lg">
        Phone-Hunter-Bd
      </h1></Link>
      <div className="nav-container flex space-y-5 flex-col">
        
      <NavLink
          to="/"
          className={({ isActive}) =>
           isActive ? "bg-red-400 flex p-2 mx-2 rounded-lg gap-2" : "flex hover:bg-gray-100 p-2 mx-2 rounded-lg gap-2"
          }
        >
       <div className="flex items-center gap-2">
        <HomeIcon className="h-5 w-5 text-blue-500"></HomeIcon>
        <h1>Home</h1>
        </div>
        </NavLink>
        
        <NavLink
          to="/orders"
          className={({ isActive}) =>
           isActive ? "bg-red-400 flex p-2 mx-2 rounded-lg gap-2" : "flex hover:bg-gray-100 p-2 mx-2 rounded-lg gap-2"
          }
        >
       <div className="flex gap-2">
       <ShoppingCartIcon className="h-5 w-5 text-blue-500"></ShoppingCartIcon>
        <h1>Orders</h1><span>({cart.length})</span>
        </div>
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive}) =>
           isActive ? "bg-red-400 flex p-2 mx-2 rounded-lg gap-2" : "flex hover:bg-gray-100 p-2 mx-2 rounded-lg gap-2"
          }
        >
       <div className="flex gap-2">
       <HeartIcon className="h-5 w-5 text-blue-500"></HeartIcon>
        <h1>Favorites ({favorite.length})</h1>
        </div>
        </NavLink>
        

        <NavLink
          to="/login"
          className={({ isActive}) =>
           isActive ? "bg-red-400 flex p-2 mx-2 rounded-lg gap-2" : "flex hover:bg-gray-100 p-2 mx-2 rounded-lg gap-2"
          }
        >
       <div className="flex gap-2">
       <ArrowRightOnRectangleIcon className="h-5 w-5 text-blue-500"></ArrowRightOnRectangleIcon>
        <h1>Login</h1>
        </div>
        </NavLink>

        
        <NavLink
          to="/about"
          className={({ isActive}) =>
           isActive ? "bg-red-400 flex p-2 mx-2 rounded-lg gap-2" : "flex hover:bg-gray-100 p-2 mx-2 rounded-lg gap-2"
          }
        >
       <div className="flex gap-2">
       <InformationCircleIcon className="h-5 w-5 text-blue-500"></InformationCircleIcon>
        <h1>About</h1>
        </div>
        </NavLink>

       




      </div>
    </div>
  );
};

export default Nav;
