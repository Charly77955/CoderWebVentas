
import React, {useState} from 'react';


function Carrito({initialCount}) {
  const [Carrito, setCarrito] = useState(initialCount);

  const aumentar = () => {
    if(Carrito < 5){
     setCarrito(Carrito + 1);
    } else { 
        setCarrito(Carrito + 0);
    }}
const disminuir = () => {
    if(Carrito > 0){
      setCarrito(Carrito - 1);
    } else { 
        setCarrito(Carrito - 0);
    }}
        
        
    return (
        <div className='Bloque'>
            <h4>Indique cantidad</h4>
            <h4>{Carrito}</h4>
            
            
            <button onClick={() => setCarrito(initialCount=0)}>Reset</button>
            <button onClick={aumentar}>+</button>
            <button onClick={disminuir}>-</button>
            </div>
            
    )
    }
    export default Carrito;