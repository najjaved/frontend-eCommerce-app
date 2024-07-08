//import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsListPage from "./pages/ProductsListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import UserLoginPage from "./pages/UserLoginPage";
import { API_URL } from "./helpers/constants";
import NewProduct from "./components/NewProduct";
import useCart from "./components/useCart";
import CartPage from "./pages/CartPage";

function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProduct] = useCart();

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItem, setCartItem] = useState(cartItems);

  function handleAddToCart(product) {
    const existingProduct = cartItem.find((item) => item.id === product.id);

    alert("Item added to your cart!");

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      setCartItem([...cartItem, product]);
    }
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }

  function handleDelete(id) {
    const updatedCartItem = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedCartItem);
    localStorage.setItem("cart", JSON.stringify(updatedCartItem));
  }

  function updateSubtotal(item) {
    const subtotal = item.price * item.quantity;
    item.subtotal = subtotal;
    const updatedAllProduct = allProducts.map((product) =>
      product.id === item.id ? item : product
    );
    setAllProduct(updatedAllProduct);
    localStorage.setItem("cart", JSON.stringify(updatedAllProduct));
  }
  function handleEmptyCart() {
    localStorage.removeItem("cart");
    setCartItem([]);
  }

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

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={
              <ProductsListPage
                productsList={products}
                setProductsList={setProducts}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/products/:productId"
            element={<ProductDetailsPage productsList={products} />}
          />
          <Route path="/products/newProduct" element={<NewProduct />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItem}
                handleDelete={handleDelete}
                updateSubtotal={updateSubtotal}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
          <Route path="/userLogin" element={<UserLoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* fallback page */}
        </Routes>
      </div>
    </>
  );
}

export default App;
