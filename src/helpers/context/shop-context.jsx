import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

const [products, setProducts] = useState([]);

const getAllProducts = () => {
  fetch(`${API_URL}/products`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => setProducts(data))
    .catch((error) => console.log("Fetch error: ", error));
};

useEffect(() => {
  getAllProducts();
}, []);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
