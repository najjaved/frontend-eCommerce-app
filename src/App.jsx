//import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsListPage from "./pages/ProductsListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
//import UserLoginPage from "./pages/UserLoginPage";
import NewProduct from "./components/NewProduct";
//import { ShopContextProvider } from "./helpers/context/shop-context";
//import EditProductPage from "./pages/EditProductPage";
import Cart from "./pages/Cart";
import EditProductPage from "./pages/EditProductPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";

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
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/newProduct" element={<NewProduct />} />
          <Route
            path="/products/edit/:productId"
            element={<EditProductPage />}
          />
          {/* <Route path="/userLogin" element={<UserLoginPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* fallback page */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
