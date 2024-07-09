import { createContext, useState, useEffect } from "react";
import { API_URL } from "../constants";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < products.length; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const getAllProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Fetch error: ", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    console.log(
      "this is the products state right now inside the context",
      products
    ); // Log products when they are updated
    setCartItems(getDefaultCart());
  }, [products]);

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

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        removeFromCart,
        getAllProducts,
        updateCartItemCount,
        getTotalCartAmount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
