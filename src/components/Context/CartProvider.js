import React, { createContext, useState } from 'react';
import IniciarFireBase from '../../firebase/IniciarFireBase';
import Productos from '../ProductList/ItemListContainer';
import ProductStyle from '../ProductList/ProductStyle';
import { db } from '../../firebase/firebase';

export const cartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (Productos, contador) => {
    if (isInCart(Productos.id)) {

      const indexItem = cart.findIndex(ele => ele.item.id === Productos.id);

      cart[indexItem].contador = cart[indexItem].contador + contador;
      setCart([...cart]);
    } else {
      setCart([...cart, { item: Productos, contador }])
    }

  }
  const deleteItem = (id) => {
    const updatedCart = cart.filter(element => element.item.id !== id)
    setCart(updatedCart);
  }
  const sumarTodo = () => {
     if(cart){
       return cart.map((item) => item.item.precio * item.contador).reduce((a , b) => a + b)
     }

  }

  const isInCart = (id) => {
    return cart.some(element => element.item.id === id)
  }
  const clearCart = () => {
    setCart([])
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, deleteItem, deleteItem, sumarTodo, clearCart }}>
      {children}
    </cartContext.Provider>
  )
};


export default CartProvider;
