import React, {useState} from 'react'
import { commerce } from '../../lib/commerce'

import './Cart.css'

export default function Cart() {

    const[cart, setCart] = useState({})

    const fetchCart = async () => {
        const response = await commerce.cart.retrieve()
    }


  return (
    <div className="bodyContainer">
      console.log
    </div>
  )
}
