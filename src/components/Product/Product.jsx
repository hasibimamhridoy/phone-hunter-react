import {
  ArrowRightCircleIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Spinner from "../Spinner/Spinner";
import StarRating from "../StartRating/StarRating";


const Product = ({ product, handleCartItem, handleFavoriteItem }) => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }

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
  } = product;

  
  const [cart, setCart] = useState([]);
  const { products } = useLoaderData();

  const discount = parseFloat(((price * discountPercentage) / 100).toFixed(2));
  const discountPrice = parseFloat(price - discount);

  console.log(cart);
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a >
          <img
            className=" w-full h-52 rounded-t-lg object-fill p-5 rounded-lg z-5"
            src={images[0]}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <div className="flex justify-between">
          <a >
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <h1>Stock ( {stock} )</h1>
          </div>

          <div className="flex items-center mt-2.5 mb-5">
            <StarRating rating={rating}></StarRating>

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating} <span>({rating})</span>
            </span>
          </div>

          <div className="discount">
            <span className="">
              <del className="text-lg font-bold text-gray-900 dark:text-white">
                Tk. {price.toFixed(2)}
              </del>{" "}
              <span className="text-[0.8rem] text-red-600">
                {discountPercentage}% Off
              </span>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Tk. {discountPrice.toFixed(2)}
              </span>
            </div>
            <div className="details-btn flex space-x-4 items-center ">
              <ShoppingCartIcon
                onClick={() => handleCartItem(id)}
                className="h-5 w-5 text-purple-600 cursor-pointer"
              ></ShoppingCartIcon>
              <HeartIcon
                onClick={() => handleFavoriteItem(id)}
                className="h-5 w-5 text-blue-500 cursor-pointer"
              ></HeartIcon>

              {/* //show Details */}
              <Link to={`/product/${id}`}>
                <ArrowRightCircleIcon className="h-6 w-6 cursor-pointer"></ArrowRightCircleIcon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
