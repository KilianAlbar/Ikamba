// import React, {useState, useEffect} from 'react'

// // ==== Dependencies ====

// import { commerce } from '../../lib/commerce';


// export default function AddToCart() {
//     const [cart, setCart] = useState({});

//     const handleAddtoCart = async(productId, quantity) => {
//         const item = await commerce.cart.add(productId, quantity)
//         setCart(item.cart);
//     }
//     const fetchCart = async () => {
//         setCart(await commerce.cart.retrieve())
//     }

//       useEffect(()=>{
//           fetchCart();
//       }, []);


//   return (
//     <div>

//     </div>
//   )
// }
