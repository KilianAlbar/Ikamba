import React, {useLayoutEffect, useState} from 'react'


import './Cart.css'

// ==== Dependencies ====
import DeleteIcon from '@mui/icons-material/Delete';
import { commerce } from '../../lib/commerce'

export default function Cart({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) {

  const EmptyCart = () =>{
    <h2>You don't have any items in your cart, start adding some !</h2>
  }

  const FilledCart = () => {
    return (
    <>
      <div className='cartDetails'>
        <div className='cartTitles'>
          <div>Name</div>
          <div>Price</div>
          <div>Quantity</div>
        </div>
      {cart.line_items.map((item) =>(
        <div className='cartItems' key={item.id}>
          <div>{item.name}</div> 
          <div className="priceContainer">
            <div className='priceDetails'>{item.line_total.formatted_with_symbol}</div>
          </div>
            <div className='qtyContainer'>
              <button className='removeQty' onClick={() => handleUpdateCartQty(item.id, item.quantity -1)}>-</button>
              <div className='qtyDetails'>{item.quantity}</div>
              <button className='addQty' onClick={() => handleUpdateCartQty(item.id, item.quantity +1)}>+</button>
              <DeleteIcon className='deleteIcon' onClick={() => handleRemoveFromCart(item.id)}/>
            </div>
            
        </div>
      ))}
      </div>
      <div className='cartTotal'>
        <span>Subtotal : {cart.subtotal.formatted_with_symbol}</span>
        <div className='cartBtn'>
          <button className="emptyCart" onClick={() => handleEmptyCart()}>Empty Cart</button>
          <button className="checkoutBtn">Checkout</button>
        </div>
      </div>
    </>
    )};

    if(!cart.line_items) return <span className='loading'>Loading...</span>  
  
  return (
    <div>
      <h1 className='cart'>Your Shopping Cart</h1>
      {!cart.line_items ? <EmptyCart/> : <FilledCart/>}
    </div>
  )
}
