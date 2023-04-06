import "./App.css";
import { createBrowserRouter, RouterProvider, useNavigation } from "react-router-dom";
import SideMenuNav from "./components/SideMenuNav/SideMenuNav";
import Home from "./components/Home/Home";
import OrdersCart from "./components/OrdersCart/OrdersCart";
import Checkout from "./components/Checkout/Checkout";
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites";
import Login from "./components/Login/Login";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Payment from "./components/Payment/Payment";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




function App() {

 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SideMenuNav></SideMenuNav>,
      loader: () => fetch("https://dummyjson.com/products"),
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("https://dummyjson.com/products"),
        },
        {
          path: "/orders",
          element: <OrdersCart></OrdersCart>,
          loader: () => fetch("https://dummyjson.com/products"),
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/favorites",
          element: <Favorites></Favorites>,
          loader: () => fetch("https://dummyjson.com/products"),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/product/:productId",
          element: <ProductDetails></ProductDetails>,
          loader: ({ params }) =>
            fetch(`https://dummyjson.com/products/${params.productId}`),
        },
        {
          path: "/checkout",
          element: <Checkout></Checkout>,
        },
        {
          path: "/payment",
          element: <Payment></Payment>,
          loader: () => fetch("https://dummyjson.com/products"),
        },
      ],
    },
  ]);

  return (
    <div className="App">
      

      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />

     
    
 
    </div>
  );
}

export default App;
