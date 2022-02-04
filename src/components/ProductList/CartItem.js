import React, { useContext, useState } from 'react';
import { CarritoContext } from '../Context/CartProvider';

const CarritoItem = ( {prod} ) => {
  
  const {deleteItem} = useContext(CarritoContext);

  return (
    <div>
      <h3>{prod.item.title} </h3>
      <p> quantity:{prod.contador}</p>
      <button onClick={()=> deleteItem(prod.item.id)}>Delete</button>
    </div>

  )
};
export default CarritoItem;

