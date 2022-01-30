
import React, { useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { Link } from "react-router-dom";



function Carrito({ initialCount, onAdd }) {
  const [Carrito, setCarrito] = useState(initialCount);

  function FinishSale() {

  };

  const aumentar = () => {
    if (Carrito < 5) {
      setCarrito(Carrito + 1);
    } else {
      setCarrito(Carrito + 0);
    }
  }
  const disminuir = () => {
    if (Carrito > 0) {
      setCarrito(Carrito - 1);
    } else {
      setCarrito(Carrito - 0);
    }
  }


  return (
    <div className='Bloque'>
      <h4>Indique cantidad</h4>
      <h4>{Carrito}</h4>

      <ItemDetail Carrito={Carrito} />

      <div className="btn-group">

        <button type="button" className="btn btn-success"onClick={() => 
          setCarrito(initialCount=0)} >Iniciar compra</button>

        <button type="button" className="btn btn-primary"onClick={aumentar}>+</button>

        <button type="button" className="btn btn-primary"onClick={disminuir}>-</button>

        <button type="button" className="btn btn-success"onClick={() => onAdd()}>
        <Link to="/FinishSale" ></Link>Finalizar compra</button>
      </div>
    </div>

  )
}
export default Carrito;