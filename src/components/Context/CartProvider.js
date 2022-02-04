import React, { createContext, useState } from 'react';
import Productos from '../ProductList/ItemListContainer';
import ProductStyle from '../ProductList/ProductStyle';

export const CarritoContext = createContext();

const CarritoProvider = ({children}) => {

  const [Carrito, setCarrito] = useState([]);

  const addToCarrito = (Productos, contador) => {
    if (isInCart(Productos.id)){

      const indexItem = Carrito.findIndex(ele => ele.item.id === Productos.id);

      Carrito[indexItem].contador = Carrito[indexItem].contador + contador;
      setCarrito([...Carrito]);
    } else { 
      setCarrito([...Carrito,{item: Productos, contador}])
    }

  }
   const deleteItem =(id) => {
    const updatedCarrito = Carrito.filter(element => element.item.id !== id)
    setCarrito(updatedCarrito);
   }

  const isInCart = (id) => {
    return Carrito.some(element => element.item.id === id)
  }

  return ( 
  <CarritoContext.Provider value={{Carrito, addToCarrito, deleteItem}}>
    {children}
  </CarritoContext.Provider>
  )
};


export default CarritoProvider;
