import React from 'react'
const ProductCard = ({ product }) => {
    return (
        <div className='product'>
            <div>
              <p>{product.Year}</p>
            </div>
            <div>
              <img src={product.image !== "N/A" ? product.image : 'https://via.placeholder.com/400'} alt={product.title} />
            </div>
            <div>
              <span>{product.category}</span>
              <h3>{product.title}</h3>
            </div>
            </div>
    )
}

export default ProductCard