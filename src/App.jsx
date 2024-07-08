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
import EditProductPage from './pages/EditProductPage';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [products, setProducts] = useState([]);

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

   // add newly added product to the list of products
   const addProduct = (formInputs) => {
    const newId = uuidv4();
    const newProduct = formInputs;
    newProduct.id = newId;
    console.log('newly added product Id: ', newProduct.id );

    setProducts((prevProducts) => ([formInputs, ...prevProducts])); //latest entries on top
  };

  const updateProductsData = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };


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
              />
            }
          />

          <Route
            path="/products/:productId"
            element={<ProductDetailsPage productsList={products} />}
          />

          <Route path="/products/newProduct" 
          element={
          <NewProduct productsList ={products} addNewProduct={addProduct}/>} 
          />

          <Route 
            path="/products/edit/:productId" 
            element={<EditProductPage productsList ={products} onUpdate={updateProductsData}/>}
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
