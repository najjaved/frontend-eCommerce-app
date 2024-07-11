import React, { useContext } from "react";
import { ShopContext } from "../helpers/context/shop-context";
import CartItem from "../components/CartItem";
import { Button } from "@mantine/core";
import image from "../assets/images/placeholderList.jpeg";

const Cart = () => {
  const { getTotalCartAmount, products, cartItems, fakePayReset } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Your Cart Items:</h1>
      </div>
      <div className="cart-items">
        {products.map((product) => {
          if (cartItems[product.id] && cartItems[product.id] !== 0) {
            return <CartItem key={product.id} product={product} />;
          }
          return null;
        })}
      </div>
      <div className="cart-checkout">
        {totalAmount > 0 ? (
          <p className="subtotal">Subtotal: ${totalAmount.toFixed(2)}</p>
        ) : (
          <div className="emptycart">
            <h1 className="carth1">Your Shopping Cart is empty</h1>
            <img className="emptyimage" src={image} alt="Placeholder" />
          </div>
        )}
        <div className="cart-buttons">
          <Button
            variant="filled"
            color="indigo"
            size="lg"
            radius="md"
            component="a"
            href="/products"
          >
            Continue Shopping
          </Button>
          <Button
            variant="filled"
            color="indigo"
            size="lg"
            radius="md"
            onClick={fakePayReset}
          >
            Fake Pay & Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
