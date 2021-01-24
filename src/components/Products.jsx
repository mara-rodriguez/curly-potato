import React, { useContext } from 'react';

import Context from '../context/Context';
import Product from './Product';

import '../styles/components/Products.css';

const Products = () => {
  const { state, addToCart } = useContext(Context);
  const { products }  = state;

  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <div className='Products'>
      <div className='Products-items'>
        {products.map(product => (
          <Product
            handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;