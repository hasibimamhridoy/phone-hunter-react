import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import { Outlet, useLoaderData } from "react-router-dom";
import { getDataBase, setdataBase,singleCartItemRemove } from "../../utilities/Database/Database";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MobileNav from "../MobileNav/MobileNav";

const SideMenuNav = () => {
  const { products } = useLoaderData();
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const storedCartItem = getDataBase('shopping-cart');

    let savedCart = [];

    for (const id in storedCartItem) {
      // console.log(id);

      let findItem = products.find((product) => product.id == id);
      findItem.quntity = storedCartItem[id];
      savedCart.push(findItem);
    }

    setCart(savedCart);
  }, []);

  const handleCartItem = (id) => {
 
    setdataBase(id,'shopping-cart')
    const storedCartItem = getDataBase('shopping-cart');

    let savedCart = [];

    for (const id in storedCartItem) {
      // console.log(id);

      let findItem = products.find((product) => product.id == id);
      findItem.quntity = storedCartItem[id];
      findItem.totalPrice = findItem.quntity * findItem.price
      
     savedCart.push(findItem)
      
    }


    setCart(savedCart);
    toast.success('Wow! Product Added!', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

    

  };


  const handleRemoveCart = (id) =>{
    singleCartItemRemove(id,'shopping-cart')
    const storedCartItem = getDataBase('shopping-cart');

    let savedCart = [];

    for (const id in storedCartItem) {
      // console.log(id);

      let findItem = products.find((product) => product.id == id);
      findItem.quntity = storedCartItem[id];
      savedCart.push(findItem);
    }

    setCart(savedCart);
    toast.error('Item Deleted', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });


  }
  const handleFavoriteItem = (id) => {
 
    setdataBase(id,'favorite-item')
    const storedCartItem = getDataBase('favorite-item');

    let savedCart = [];

    for (const id in storedCartItem) {
      // console.log(id);

      let findItem = products.find((product) => product.id == id);
      findItem.quntity = storedCartItem[id];
      findItem.totalPrice = findItem.quntity * findItem.price
      savedCart.push(findItem);
    }

    setFavorite(savedCart);
    toast.success('Wow! Added in Favorites!', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  };

   

 
  const handleRemoveFavoriteItem = (id) =>{
    singleCartItemRemove(id,'favorite-item')
    const storedCartItem = getDataBase('favorite-item');

    let savedCart = [];

    for (const id in storedCartItem) {
      // console.log(id);

      let findItem = products.find((product) => product.id == id);
      findItem.quntity = storedCartItem[id];
      savedCart.push(findItem);
    }

    setFavorite(savedCart);
    toast.error('Remove to Favorites', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });


  }



 

  return (
    <div className="">
      <div className="lg:flex">
        
        <div className="nav lg:sticky lg:top-0 lg:h-screen lg:w-[15%] w-0 hidden lg:block bg-gray-100 p-2 ">
          <Nav cart={cart} favorite={favorite}></Nav>
        </div>

        <div className="mobileNav sticky top-0 md:hidden w-full">
          <MobileNav cart={cart} favorite={favorite}></MobileNav>
        </div>

        <div className="lg:w-[85%] w-full">
          <Outlet context={[handleCartItem,handleRemoveCart,handleFavoriteItem,handleRemoveFavoriteItem,cart]}></Outlet>
        </div>
      </div>
    </div>
  );
};

export default SideMenuNav;
