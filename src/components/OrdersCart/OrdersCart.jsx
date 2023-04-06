import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import {
  getDataBase,
  singleCartItemRemove,
} from "../../utilities/Database/Database";
import { TrashIcon } from "@heroicons/react/24/solid";

const OrdersCart = () => {
  const [cart, setCart] = useState([]);
  const { products } = useLoaderData();

  const [handleCartItem, handleRemoveCart] = useOutletContext();

  useEffect(() => {
    const storedCartItem = getDataBase("shopping-cart");

    let savedCart = [];

    for (const id in storedCartItem) {
      // console.log(id);

      let findItem = products.find((product) => product.id == id);
      findItem.quntity = storedCartItem[id];

      findItem.singleProductPrice = findItem.price - ((findItem.price * findItem.discountPercentage)/100)
      
      findItem.mainPrice = findItem.price * findItem.quntity

      findItem.discountPrice = findItem.singleProductPrice * findItem.quntity
      
        findItem.onlyDiscountPrice =
        (findItem.mainPrice * findItem.discountPercentage) / 100;


      savedCart.push(findItem);
    }

    setCart(savedCart);
  }, []);

  console.log(cart);



  let withoutDiscountTotalPrice= 0 
  let grandDiscountAmount = 0
  let grandFinalPrice = 0
  let totalProductQuantity= 0 

  for (const product of cart) {
  
    withoutDiscountTotalPrice = withoutDiscountTotalPrice + product.mainPrice
    grandDiscountAmount = grandDiscountAmount + product.onlyDiscountPrice
    grandFinalPrice = grandFinalPrice +product.discountPrice
    totalProductQuantity = totalProductQuantity+ product.quntity
 
  }

 
  const handleRemoveCartTwo = (id) => {
    singleCartItemRemove(id, "shopping-cart");
    const storedCartItem = getDataBase("shopping-cart");

    let savedCart = [];

    for (const id in storedCartItem) {
      // console.log(id);

      let findItem = products.find((product) => product.id == id);
      findItem.quntity = storedCartItem[id];
      savedCart.push(findItem);
    }

    setCart(savedCart);
  };

  return (
    <div className="">
      <h1 className="text-3xl text-center my-5">Order History Page</h1>

      <div className="order-container lg:flex lg:flex-row flex-col gap-5 lg:p-5">
        <div className="product lg:w-[65%] w-full bg-gray-100  rounded-sm space-y-4 px-5">
          <div className="added-product p-3 rounded-md">
            <h1 className="text-xl text-center">Cart Item</h1>
          </div>

          <div className="singleProductContainer space-y-5 pb-5">
            {cart.map((item) => {
              const {
                id,
                brand,
                category,
                description,
                discountPercentage,
                images,
                price,
                rating,
                stock,
                title,
                thumbnail,
                quntity,
                totalPrice,
                finalDiscoutPrice,
                singleProductPrice,
                discountPrice
              } = item;
              
              return (
                <div
                  key={id}
                  className="flex justify-between items-center bg-white lg:px-5 px-2 rounded-lg "
                >
                  <div className="item w-full flex items-center gap-3 p-3">
                    <div className="img">
                      <img
                        className="w-20 h-20 rounded-md"
                        src={thumbnail}
                        alt=""
                      />
                    </div>

                    <div className="item-info">
                      <h1 className="text-xl">{}</h1>
                      <h1 className="text-sm">Tk. {singleProductPrice.toFixed(2)}</h1>
                      <h1 className="text-sm">Quantity {quntity}</h1>
                      <h1 className="text-sm">
                        Total Price : 
                        <span className="font-semibold text-orange-600">
                          
                          {discountPrice}
                        </span>
                      </h1>
                    </div>
                  </div>

                  <div onClick={() => handleRemoveCartTwo(id)} className="">
                    <TrashIcon
                      onClick={() => handleRemoveCart(id)}
                      className="w-8 h-8 text-red-500 cursor-pointer"
                    ></TrashIcon>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="checkout  overflow-y-auto top-6 rounded-md bg-gray-100 lg:h-[29rem] lg:w-[35%] w-full">
          <h1 className="text-center font-semibold my-3 text-xl">
            Total Amount
          </h1>

          <div className="singleProductContainer m-3 space-y-4 lg:my-7">
            {cart.map((item) => {
              const {
                id,
                brand,
                category,
                description,
                discountPercentage,
                images,
                price,
                rating,
                stock,
                title,
                thumbnail,
                quntity,
                totalPrice,
                finalDiscoutPrice,
                singleProductPrice,
                discountPrice
              } = item;
              
              return (
                <div
                  key={id}
                  className="flex justify-between items-center bg-white rounded-lg "
                >
                  <div className="item w-full flex items-center gap-3 p-3">
                    <div className="img">
                      <img
                        className="w-14 h-14 rounded-md"
                        src={thumbnail}
                        alt=""
                      />
                    </div>

                    <div className="item-info ">
                      <h1 className="text-sm">{title}</h1>
                      <h1 className="text-sm">Quantity {quntity}</h1>
                      <h1 className="text-sm">
                        Total Price :{discountPrice.toFixed(2)}
                       
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="finalCount space-y-4 m-5 font-semibold">
            <h1>Without Discount Price : <span className="font-semibold text-orange-500">{withoutDiscountTotalPrice.toFixed(2)} </span>  Tk</h1>
            <h1>Total Discount : <span className="font-semibold text-orange-500">{grandDiscountAmount.toFixed(2)} </span>  Tk</h1>
            <h1>Total Quantity : <span className="font-semibold text-orange-500">{totalProductQuantity} </span>  pieces</h1>
            
            <h1>Final Amount : <span className="font-semibold text-red-500">
              {grandFinalPrice.toFixed(2)} </span>  Tk</h1>

            <Link to="/checkout">
              <button className=" w-full mt-5  text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersCart;
