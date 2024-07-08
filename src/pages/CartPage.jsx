import { useEffect } from "react";
import { Link } from "react-router-dom";

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
    <>
      <div></div>
    </>
  );
}
export default CartPage;
