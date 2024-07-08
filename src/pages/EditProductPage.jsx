import React, { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

const EditProductPage = ({productsList, onUpdate }) => {

    const { productId } = useParams();
    const navigate = useNavigate();


    const product = productsList.find((currentProduct) => currentProduct.id.toString() === productId);
    if(!product){
      console.log('product not found in products list',product );
      return <Navigate to= {`/products/${productId}`} />;
    }

    // Store updated entries 
    const [updatedProduct, setUpdatedProduct] = useState(product); // initialize form entries with product object

    const handleUpdateSubmit = (event) => {
        event.preventDefault();
        // update productsList with updated project entries
        onUpdate(updatedProduct);
        navigate('/products');
    }

    const handleChange = event => {
        const currentName = event.target.name
        const currentValue = event.target.value
        console.log({ currentName, currentValue })
        setUpdatedProduct({ ...updatedProduct, [currentName]: currentValue }) // pass copy of product entries, and update current entry
      }

    const handleCancelEdit = () => {
        navigate('/products'); // navigate to products listing
      };

    
    return (
        <div className = 'form' style = {{marginTop: '100px'}}>
          <h3>Edit existing product</h3>
          <form onSubmit={handleUpdateSubmit}>
            <label>
                Product Category
                <select name="category" value={updatedProduct.category} onChange={handleChange} >
                    <option value="">-- None --</option>
                    <option value="Herbal Teas">Herbal Teas</option>
                    <option value="Homemade Cosmetics">Homemade Cosmetics</option>
                    <option value="Herbal Supplements">Herbal Supplements</option>
                    <option value="Mineral Products">Mineral Products</option>
                </select>
            </label>

            <label>
              Title
              <input name='title' value={updatedProduct.name} onChange={handleChange} />
            </label>
    
            <label>
              Price
              <input name='price' type="number" value={updatedProduct.price} onChange={handleChange} />
            </label>
    
            <label>
              Discount
              <input name='discount' value={updatedProduct.discount} onChange={handleChange} />
            </label>
            <div className="buttons-div">
                <button type='submit'>Update Product</button>
                <button type="button" onClick={handleCancelEdit}> Cancel </button>
            </div>
            
          </form>
        </div>
      );
}
 
export default EditProductPage;