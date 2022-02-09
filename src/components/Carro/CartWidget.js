
 import React, { useState, useContext, useEffect } from 'react';
 import { cartContext } from "../Context/CartProvider";
 
  function CartWidget() {
    const { cart } = useContext( cartContext );

         return (
            <>
            {cart.length == 0 ? <></> : <div>
                 <i className="material-icons text-primary">shopping_cart</i>
                 <span>{cart.length}</span>
             </div>}
            </>
         )
 }
 
 export default CartWidget;
 
