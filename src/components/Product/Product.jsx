import {
  ArrowRightCircleIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";


import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../Spinner/Spinner";

const Product = ({ product, handleCartItem, handleFavoriteItem }) => {

  const navigation = useNavigation()

  if (navigation.state==='loading') {
    return <Spinner></Spinner>
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

  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className=" w-full h-52 rounded-t-lg object-fill p-5 rounded-lg z-5"
            src={images[0]}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}
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
