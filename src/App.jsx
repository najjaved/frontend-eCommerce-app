import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductsListPage from "./pages/ProductsListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import Cart from "./pages/Cart";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import ProductForm from "./components/ProductForm";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/category/:categoryName" element={<CategoryPage />} />
            <Route path="/products" element={<ProductsListPage />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/newProduct" element={<ProductForm />} />
            <Route
              path="/products/edit/:productId"
              element={<ProductForm />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
