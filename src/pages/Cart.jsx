import React, { useContext } from "react";
import { ShopContext } from "../helpers/context/shop-context";
import CartItem from "../components/CartItem"; // Adjust the path as necessary
import { Button } from "@mantine/core";

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
        {totalAmount > 0 ? (
          <p>Subtotal: {totalAmount}</p>
        ) : (
          <h1>Your Shopping Cart is empty</h1>
        )}
        <Button
          variant="filled"
          color="indigo"
          size="lg"
          radius="md"
          component="a"
          href="/products"
        >
          Continue Shopping
        </Button>{" "}
        <Button variant="filled" color="indigo" size="lg" radius="md">
          Fake Pay & Reset
        </Button>
      </div>
    </div>
  );
};

export default Cart;
