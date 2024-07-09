import React, { useContext } from "react";
import { ShopContext } from "../helpers/context/shop-context";
import CartItem from "../components/CartItem"; // Adjust the path as necessary

const Cart = () => {
  const { products, cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items:</h1>
      </div>
      <div className="cartItems">
        {products.map((product) => {
          if (cartItems[product.id] && cartItems[product.id] !== 0) {
            return <CartItem key={product.id} product={product} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;
