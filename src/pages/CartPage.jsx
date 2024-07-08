import { useEffect } from "react";
import { Button } from "@mantine/core";

function CartPage({
  cartItems,
  handleDelete,
  updateSubtotal,
  handleEmptyCart,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="list-content">
        <h1>What are you buying to make your life better?</h1>

        <div className="container">
          {cartItems.length > 0 ? (
            <table className="cart-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Item name</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="product">
                    <td className="cart-img">
                      <img src={item.image} alt={item.title} />
                    </td>
                    <td className="name">{item.title}</td>

                    <td className="unit-price">{item.price}€</td>

                    <td className="quantity">
                      <input
                        className="quantity-input"
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => {
                          item.quantity = parseInt(e.target.value);
                          updateSubtotal(item);
                        }}
                      />
                    </td>

                    <td className="subtotal">
                      <span className="subtotal-value">
                        {item.price * item.quantity}€
                      </span>
                    </td>

                    <td className="delete">
                      <div className="action">
                        <button
                          className="btn-delete"
                          onClick={() => handleDelete(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr key="total-row">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="total-title">
                    <strong>Total:</strong>
                  </td>
                  <td>
                    <span className="subtotal-value">{total}€</span>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className="flexcenter">
              <img
                src="https://media.giphy.com/media/RoFXqXWN639Qs/giphy.gif"
                alt="Empty Cart GIF"
              />
              <h3 className="empty-cart">
                There's nothing in your cart. Go look for products
              </h3>
            </div>
          )}
        </div>
        <section className="ButtonContainer">
          <Button
            component="a"
            variant="filled"
            color="indigo"
            size="lg"
            radius="md"
            href="/products"
          >
            Continue Shopping
          </Button>

          <Button
            variant="filled"
            color="lime"
            size="lg"
            radius="md"
            onClick={handleEmptyCart}
          >
            Fake-Buy
          </Button>
        </section>
      </div>
    </div>
  );
}
export default CartPage;
