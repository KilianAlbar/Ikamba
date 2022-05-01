import React, { useState, useEffect } from 'react';
import './ProductPage.css'

// ==== Dependencies ==== 
import { commerce } from '../../lib/commerce';
import { Link } from 'react-router-dom';


export default function ProductPage({productName, onAddToCart, setIsOpen}) {
    
    const [product, setProduct] = useState([]);
    const [variants, setVariants] = useState([]);
    const [renderCount, setRenderCount] = useState(0);
    const [qty, setQty] = useState(1);
    const [arrayPrices, setArrayPrices] = useState([])


    const fetchProducts = async () =>{
      setRenderCount(() => renderCount+1);
      if(renderCount <= 2){
        await commerce.products.list({
          query: productName.toLowerCase(),
        }).then((data)=>setProduct(data.data))
          .then( async () => await commerce.products.getVariants(product[0].id)
          .then((variants) => setVariants(variants.data))
          );
      }
      }
        
      useEffect(()=>{
          fetchProducts();
      }, [product]);


      const getInputQty = (event) =>{
        setQty(event.target.value);
      }

    return(
        <div>
            {  product.length > 0 ?
              <div className='productPage'>
                <div className="productTop">
                  <h1 className='productPageTitle'>{product[0].name}</h1>
                  <img className='cardImg' src={product[0].image.url} />
                </div>
                
                <div className='productCard'>
                  <div className='productDiv'>
                    <div className='descriptionDiv'>
                      <div className='description' dangerouslySetInnerHTML={{ __html: product[0].description}}/>
                    </div>

                    {variants ?
                   <div className='variantsDiv'>
                    <h4>Packing</h4>
                    {variants.map((variant)=>
                      <div className='variantBody' key={variant.id}>
                        <div>{variant.description}</div>
                        <div>{variant.price.formatted_with_symbol}<button className='addBtn' onClick={() => onAddToCart(product[0].id, qty, variant.id)}>Add</button><input className='qtyInput' placeholder='1' onChange={getInputQty} /></div>
                      </div>
                    )}
                  </div>
                  :
                  <div></div>
                  }


                  </div>
                </div>
                <h3 className='otherQttContact'>For other quantities please <Link to='/contact'>contact us</Link></h3>
                <button className='closeModalBtn' onClick={()=>setIsOpen(false)}>Close</button>
              </div>
              : <div className='loading'>Loading...</div>
            }
        </div>
    )
}