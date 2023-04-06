const setdataBase = (id,key) => {
    
    let getCartItem = getDataBase(key)

    let quantity = getCartItem[id]

    if (!quantity) {
        getCartItem[id] = 1
        
    }

    else{
        getCartItem[id] = quantity + 1
    }

    return localStorage.setItem(key,JSON.stringify(getCartItem))

};

const getDataBase =(key)=>{

    let shoppingCart = {}

    const storedCartItem = localStorage.getItem(key)

    if (storedCartItem) {

        shoppingCart = JSON.parse(storedCartItem)
    }

    return shoppingCart

}


const singleCartItemRemove =(id,key)=>{


    const objStr = localStorage.getItem(key); // Replace 'myObject' with the key name of your object in localStorage.
    if (objStr) {
      const obj = JSON.parse(objStr);
      delete obj[id];
      localStorage.setItem(key, JSON.stringify(obj)); // Replace 'myObject' with the key name of your object in localStorage.
    } else {
      console.log('Object not found in localStorage.');
    }
    

}
const removeAllCartItem =()=>{

}

export{
setdataBase,
getDataBase,
singleCartItemRemove,
removeAllCartItem
};