import React, { useState, useEffect } from 'react'


// ==== Styles ====
import './Products.css'

// ==== Imports ====
import ProductPage from './ProductPage';

// ==== dependencies ===
import {useParams } from 'react-router-dom';
import AddToCart from '../Cart/AddToCart';
import Modal from 'react-modal';
import { commerce } from '../../lib/commerce';

export default function Products({submenus, onAddToCart}) {

  const [singleProduct, setSingleProduct] = useState('');
  const [products, setProducts] = useState([]);
  let {path} = useParams();

  const fetchProducts = async () =>{
    await commerce.products.list({
      limit: 200,
      category_slug: [path],
    }).then((data)=>setProducts(data.data));
  }

  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleClick = (productName)=>{
    setSingleProduct(productName);
    singleProduct != '' ? setIsOpen(true): setIsOpen(false);
  }

  useEffect(()=>{
    fetchProducts();
  }, [path]);

  const VariantInfos = () => {
    products.map((item) => {
      item.variant_groups[0].options.map((itemOptions) =>
      <div>{itemOptions.name}{itemOptions.price.formatted_with_symbol}</div>
      )
    })
  }
  


    return (
      <div className='productBody'>
        {products.length > 0 ? <h2 className='categoryTitle'>{products[0].categories[0].name}</h2>:<div className='loading'>Loading...</div>}
        <div className="gridContainer">
          {products.map((product) => 
          <div key={product.id} className="productsDiv">
              {product.categories.map((category) => {
                  return <div className='product' key={product.id} onClick={() => handleClick(product.name)} style= {{cursor:"pointer"}}>
                  <h1 className="productTitle">{product.name}</h1>
                  <img className='productImg' src={product.image.url} item={products}/>
                  <button onClick={() => onAddToCart(product.id, 1)}>Add</button>
                </div>
                
              })}
          </div>
          )}
        </div>
        <Modal
          className='productModal'
          isOpen={modalIsOpen}
        >
              <ProductPage productName={singleProduct} setIsOpen={setIsOpen} onAddToCart={onAddToCart} variantInfos={VariantInfos()}/>
  
        </Modal>
      </div>
    )
  }