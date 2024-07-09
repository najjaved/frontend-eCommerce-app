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
import { ShopContextProvider } from "./helpers/context/shop-context";
import EditProductPage from "./pages/EditProductPage";

function App() {
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
              /*  productsList={products}
                setProductsList={setProducts}
                handleAddToCart={handleAddToCart} */
              />
            }
          />
          <Route
            path="/products/:productId"
            element={
              <ProductDetailsPage
              /*  productsList={products}
                handleAddToCart={handleAddToCart} */
              />
            }
          />
          <Route path="/products/newProduct" element={<NewProduct />} />
          {/* <Route path="/userLogin" element={<UserLoginPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* fallback page */}
        </Routes>
      </div>
    </>
  );
}

export default App;
