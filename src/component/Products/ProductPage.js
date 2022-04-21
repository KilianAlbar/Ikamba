import React, { useState, useEffect } from 'react';
import './ProductPage.css'

// ==== Dependencies ==== 
import { commerce } from '../../lib/commerce';
import { Link } from 'react-router-dom';


export default function ProductPage({productName, onAddToCart, setIsOpen, variantInfos}) {
    
    const [product, setProduct] = useState([]);
    const [variants, setVariants] = useState([]);
    const [renderCount, setRenderCount] = useState(0);

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
                      <p className='priceText'>Starting at: {product[0].price.formatted_with_symbol}</p>
                      
                    </div>

                    {variants ?
                   <div className='variantsDiv'>
                    <h4>Other Quantities</h4>
                    {variants.map((variant)=>
                      <div className='variantBody' key={variant.id}>
                        <div>{variant.description}</div>
                        <div>{variant.price.formatted_with_symbol}</div>
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