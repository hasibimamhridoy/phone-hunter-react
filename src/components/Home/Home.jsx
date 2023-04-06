import React, { useContext } from "react";
import { Link, useLoaderData, useNavigation, useOutletContext } from "react-router-dom";
import Product from "../Product/Product";
import Spinner from "../Spinner/Spinner";

const Home = () => {
  const navigation = useNavigation()

  if (navigation.state==='loading') {
    return <Spinner></Spinner>
  }
 
  const { products } = useLoaderData();
  const [handleCartItem,handleRemoveCart,handleFavoriteItem] = useOutletContext()
  

  return (
    <div>
      <Link to="/"><a className="text-center hidden lg:block my-5 text-xl lg:text-4xl">Phone Hunter Bd</a></Link>

      <div className="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {products.map((product) => (
          <Product
            key={product.id}
            products={products}
            product={product}
            handleCartItem={handleCartItem}
            handleFavoriteItem={handleFavoriteItem}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
