import React, { useContext, useState } from "react";
import { ShopContext } from "../helpers/context/shop-context";
import CartItem from "../components/CartItem";
import { Modal, Button } from "@mantine/core";
import image from "../assets/images/placeholderList.jpeg";
import naturefrau from "../assets/images/naturfrau.jpg";

import { useDisclosure } from "@mantine/hooks";

const Cart = () => {
  const { getTotalCartAmount, products, cartItems, fakePayReset } =
    useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const [modalOpened, { open, close }] = useDisclosure(false);
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);

  const handleFakePayReset = () => {
    fakePayReset();
    open();
  };

  const handleModalClose = () => {
    close();
    // Set showEmptyCartMessage to true only if the cart is empty
    setShowEmptyCartMessage(totalAmount <= 0);
  };

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
        ) : null}

        <div>
          {showEmptyCartMessage && (
            <div className="emptycart">
              <h1 className="carth1">Your Shopping Cart is empty</h1>
              <img className="emptyimage" src={image} alt="Placeholder" />
            </div>
          )}

          <>
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
                onClick={handleFakePayReset}
              >
                Fake Pay & Reset
              </Button>
            </div>
          </>

          <Modal
            opened={modalOpened}
            onClose={handleModalClose}
            title="Payment Successful!"
            centered
          >
            <>
              <h1>
                Thank you for paying & supporting this women-owned business
              </h1>
              <img
                className="emptyimage"
                src={naturefrau}
                alt="Picture with woman in nature"
              />
            </>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Cart;
