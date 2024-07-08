import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; )
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState();
  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
};
