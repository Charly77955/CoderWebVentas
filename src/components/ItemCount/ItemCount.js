import React, { useState } from 'react';

function ItemCount({ Suma, Resta }) {


  return (
    <div className='Bloque'>
      <div className="btn-group">
        <button type="button" className="btn btn-primary"onClick={()=> Suma()}>+</button>
        <button type="button" className="btn btn-primary"onClick={()=> Resta()}>-</button>
      </div>
    </div>

  )
}
export default ItemCount;