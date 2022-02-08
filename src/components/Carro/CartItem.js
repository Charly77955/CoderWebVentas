import React, { useContext, useState } from 'react';
import { cartContext } from '../Context/CartProvider';
import Productos from '../ProductList/ItemListContainer';

const CartItem = ( {Productos} ) => {

  const sumarTodo = () =>{

    return cartContext.map((item) => item.item.precio * item.contador).reduce((a,b) => a + b)
  }

  const {deleteItem} = useContext(cartContext);
  console.log(Productos)
  return (
    <div>
      <h3>{Productos.item.titulo} </h3>
      <h5 style={{fontWeight:"600"}}> quantity:{Productos.contador}</h5>
      <br/>
      <button className="btn btn-danger" onClick={()=> deleteItem(Productos.item.id)}>Delete</button>
    </div>

  )
};
export default CartItem;

