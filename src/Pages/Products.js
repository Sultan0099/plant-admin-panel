import React, { useEffect, useState } from 'react';

import ProductCard from "../Components/ProductsCard";
import { useDispatch, useSelector } from 'react-redux';
import { getUserProducts } from '../redux/actions/products';


function Category() {

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)


  const fetchProducts = async () => {
    await dispatch(getUserProducts());
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, [])


  if (loading) return <p> your products are loading ..... </p>


  return (
    <div className='category'>
      <h1 className="font-weight-bolder">Products</h1>
      <div className="container" style={{ overflowY: 'scroll', height: '76vh' }}>
        <div className="row">
          {products.map(product => (
            <div className="col-12 col-sm-8 col-md-6 col-lg-4" key={product._id}>
              <ProductCard
                productId={product._id}
                name={product.name}
                price={product.price}
                imgs={product.productPic}
                description={product.description}
                stock={product.stock}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
