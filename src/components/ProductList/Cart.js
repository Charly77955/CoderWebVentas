import React, { useContext, useState } from 'react';

const Carrito = () => {
  
  const {Carrito} = useContext(carritoContext);

  return (
    <div>
        {Carrito.map(element => <CarritoItem key={element.item.id} prod={element}/>)}
    </div>

  )
}
export default Carrito;

