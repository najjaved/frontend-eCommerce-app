import React, { useContext } from "react";
import { ShopContext } from "../helpers/context/shop-context";
import CartItem from "../components/CartItem"; // Adjust the path as necessary

const Cart = () => {
  const { getTotalCartAmount, products, cartItems } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
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
      <div className="checkout">
        <p>Subtotal: {totalAmount}</p>
        <button> continue shopping </button>
        <button> fake pay & reset </button>
      </div>
    </div>
  );
};

export default Cart;
