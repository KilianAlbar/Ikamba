import React, { useState, useEffect } from 'react'


// ==== Styles ====
import './Products.css'

// ==== Imports ====
import ProductPage from './ProductPage';

// ==== dependencies ===
import {useParams } from 'react-router-dom';
import AddToCart from '../Cart/AddToCart';
import Modal from 'react-modal';

export default function Products({submenus, products, addToCart}) {

  const [singleProduct, setSingleProduct] = useState('');
  let {path} = useParams();

  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleClick = (productName)=>{
    setSingleProduct(productName);
    singleProduct != '' ? setIsOpen(true): setIsOpen(false);
  }

    return (
      <div className='productBody'>
        {products.length > 0 ? <h2 className='categoryTitle'>{products[0].categories[0].name}</h2>:<div></div>}
        <div className="gridContainer">
          {products.map((product) => 
          <div key={product.id} className="productsDiv">
              {product.categories.map((category) => {
                if(category.slug == path){
                  return <div className='product' key={product.id} onClick={() => handleClick(product.name)} style= {{cursor:"pointer"}}>
                  <h1 className="productTitle">{product.name}</h1>
                  <img className='productImg' src={product.image.url} />
                  <button onClick={() => addToCart(product.id, 1)}></button>
                </div>
                }else{
                  console.log(product)
                }
                 
              })}
          </div>
          )}
        </div>
        <Modal
          className='productModal'
          isOpen={modalIsOpen}
        >
              <ProductPage productName={singleProduct}/>
              <button className='closeModalBtn' onClick={()=>setIsOpen(false)}>close</button>
        </Modal>
      </div>
    )
  }