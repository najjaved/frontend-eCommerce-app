import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < products.length; i++) {
      cart[i] = 0;
    }
    return cart;
  };

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

  useEffect(() => {
    setCartItems(getDefaultCart());
  }, [products]);

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  return (
    <ShopContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getAllProducts, products }}
    >
      {children}
    </ShopContext.Provider>
  );
};
