
import React, { useState, useContext, useEffect } from 'react';
import { cartContext } from "../Context/CartProvider";
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link } from "react-router-dom";
import { ItemDetailStyle } from '../ItemDetail/ItemDetailStyle';
import Productos from '../ProductList/ItemListContainer';
import CartItem from './CartItem';

function Cart() {
 
  const { cart, clearCart, sumarTodo } = useContext( cartContext );

  const [total, setTotal] = useState(0);

  useEffect(() =>{
    if(cart.length != 0){
      setTotal(sumarTodo())
    }
      
  }, [])

  return (
    <div className='Bloque'>
      <div>
        <>
          {cart.length === 0 ?
            <div> 
              <span>Empty Cart</span>
              <button type="button" className="btn btn-info"><Link to="/productos">Go to shop!</Link></button>
            </div>
            :
            <div>
              {cart.map(element => <CartItem key={element.item.id} Productos={element} />)}
              <button className="btn btn-primary" onClick={() => clearCart()}>Clear cart</button>
              <p>Total: {total}</p>
            </div>
          }
        </>
      </div>
    </div>

  )
}
export default Cart;














