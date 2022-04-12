import React, { useState, useEffect } from 'react';
import './ProductPage.css'
import { commerce } from '../../lib/commerce';


export default function ProductPage({productName}) {
    
    const [product, setProduct] = useState([]);
    const [variants, setVariants] = useState([]);
    const fetchProducts = async () =>{
        await commerce.products.list({
          query: productName.toLowerCase(),
        }).then((data)=>setProduct(data.data))
          .then( async () => await commerce.products.getVariants(product[0].id)
          .then((variants) => setVariants(variants.data))
          );
      }
      useEffect(()=>{
          fetchProducts();
      }, [product]);


    return(
        <div>
            { product.length > 0 ?
              <div className='productPage'>
                <h1 className='productPageTitle'>{product[0].name}</h1>
                <div className='productBody'>
                  <img className='productImg' src={product[0].image.url} />
                  <div className='productDiv'>
                    <div className='description' dangerouslySetInnerHTML={{ __html: product[0].description}}/>
                    <p className='priceText'>Starting at: {product[0].price.formatted_with_symbol}</p>
                    {variants.length>0?<div className='variantsDiv'>
                      <h4>Other Quantities</h4>
                      {variants.map((variant)=>
                        <div className='variantBody' key={variant.id}>
                          <div>{variant.description}</div>
                          <div>{variant.price.formatted_with_symbol}</div>
                        </div>
                      )}
                    </div>:
                    <div></div>
                    }
                  </div>
                </div>
                <h3 className='otherQttContact'>For other quantities please contact us</h3>
              </div>
              : <div>loading</div>
            }
        </div>
    )
}