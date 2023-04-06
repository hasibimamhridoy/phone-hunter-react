import React, { useEffect, useState } from "react";
import OrdersCart from "../OrdersCart/OrdersCart";
import { useLoaderData, useNavigation, useOutletContext } from "react-router-dom";
import {
  getDataBase,
  singleCartItemRemove,
} from "../../utilities/Database/Database";
import { TrashIcon } from "@heroicons/react/24/solid";
import Spinner from "../Spinner/Spinner";

const Favorites = () => {

  const navigation = useNavigation()

  if (navigation.state==='loading') {
    return <Spinner></Spinner>
  }

  const [cart, setCart] = useState([]);
  const { products } = useLoaderData();

  const [
    handleCartItem,
    handleRemoveCart,
    handleFavoriteItem,
    handleRemoveFavoriteItem,
  ] = useOutletContext();

  useEffect(() => {
    const storedCartItem = getDataBase("favorite-item");

    let savedCart = [];

    for (const id in storedCartItem) {
      // console.log(id);

      let findItem = products.find((product) => product.id == id);
      findItem.quntity = storedCartItem[id];
      savedCart.push(findItem);
    }

    setCart(savedCart);
  }, []);

  const handleRemoveCartTwo = (id) => {
    singleCartItemRemove(id, "favorite-item");
    const storedCartItem = getDataBase("favorite-item");

    let savedCart = [];

    for (const id in storedCartItem) {
      let findItem = products.find((product) => product.id == id);
      findItem.quntity = storedCartItem[id];
      savedCart.push(findItem);
    }

    setCart(savedCart);
  };

  return (
    <div className="mt-5">
      <h1 className="lg:text-3xl text-xl text-center lg:my-5 mb-5">Your Favorite Items</h1>

      <div className="order-container flex lg:p-5">
        <div className="product w-full rounded-sm space-y-4">
          {cart.map((item) => {
            const {
              id,
              discountPercentage,
              price,
              title,
              thumbnail,
              quntity,
            } = item;
            const discount = parseFloat(
              ((price * discountPercentage) / 100).toFixed(2)
            );
            const discountPrice = parseFloat(price - discount);
            return (
              <div
                key={id}
                className="flex justify-between items-center bg-gray-100 rounded-lg lg:mx-5 mx-2 space-x-2 lg:px-5 px-2 "
              >
                <div className="item w-full flex items-center gap-3 p-3 ">
                  <div className="img">
                    <img
                      className="w-20 h-20 rounded-md"
                      src={thumbnail}
                      alt=""
                    />
                  </div>

                  <div className="item-info">
                    <h1 className="lg:text-xl">{title}</h1>
                    <h1 className="text-sm">Tk. {discountPrice}</h1>
                    <h1 className="text-sm">Quantity {quntity}</h1>
                  </div>
                </div>

                <div onClick={() => handleRemoveCartTwo(id)} className="">
                  <TrashIcon
                    onClick={() => handleRemoveFavoriteItem(id)}
                    className="w-8 h-8 text-red-500 cursor-pointer"
                  ></TrashIcon>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
