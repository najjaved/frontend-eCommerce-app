const Product = ({product, deletProduct}) => {

    const handleDeleteClick = (event) => {

      event.preventDefault();
      deletProduct(product.product_id);
    };


    return ( 
        <div className = "product-div">
          <div className="images-div">
            <img src= {product.images[0]} alt = 'image to be added' /> 
          </div>
          <div className='details-div'> 
            <p> <b>Product Category:</b> {product.category} </p>
            <p> <b>Title:</b> {product.product_name} </p>
            <p> <b>Price:</b> {product.price} </p>
            <p> <b>Discount:</b> {product.discount}</p>
            {product.price <30 && <span style={{color: '#3B82F6', fontWeight:'bold'}}> Great Deal </span>}
            <div className="buttons-div">
              <button className= 'btn-primary' type = "button" onClick={handleDeleteClick} > Delete </button> {/* replace with mantine buttons  */}
              <button className= 'btn-secondary' type = "button"> Edit </button>
            </div>
          </div>
        </div>
       );
}

export default Product;





