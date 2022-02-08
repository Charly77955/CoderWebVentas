
// import React, { useState, useContext } from 'react';
// import { cartContext } from "../Context/CartProvider";
// import ItemDetail from '../ItemDetail/ItemDetail';
// import { Link } from "react-router-dom";
// import { ItemDetailStyle } from '../ItemDetail/ItemDetailStyle';
// import Productos from '../ProductList/ItemListContainer';
// import CartItem from './CartItem';


// function Cart() {
//   const { cart, clearCart } = useContext( cartContext );

//   return (
//     <div className='Bloque'>
//       <div>
//         <>
//           {cart.length === 0 ?
//             <div> 
//               <span>Empty Cart</span>
//               <button type="button" class="btn btn-info"><Link to="/productos">Go to shop!</Link></button>
//             </div>
//             :
//             <div>
//               {cart.map(element => <CartItem key={element.item.id} Productos={element} />)}
//               <button className="btn btn-primary" onClick={() => clearCart()}>Clear cart</button>
//             </div>
//           }
//         </>
//       </div>
//     </div>

//   )
// }
// export default Cart;