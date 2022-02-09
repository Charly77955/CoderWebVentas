import React, {useContext, useEffect, useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from '../Context/CartProvider';
import Productos from "../Productos/Productos.json";

export const ItemDetailStyle = (props) => {
    const { item, id } = props;
    const [contador, setContador] = useState(0);
    const [Producto, setProducto] = useState(null);

    const { addToCart } = useContext(cartContext)

    function onAdd(cantidad) {
        alert('agregar ' + cantidad);
        
    }
    const aumentar = () => {
        if (contador < 5) {
          setContador(contador + 1)} 
            else {
          setContador(contador + 0)
        }
      }
      const disminuir = () => {
        if (contador > 0) {
            setContador(contador - 1);
        } else {
            setContador(contador - 0);
        }
    }
      
    return (
        <>
        <div>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.imagen} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item?.titulo}</h5>
                        <span className="card-text">{item.descripcion}</span>
                        <span className="card-text"><small className="text-muted">Consulte sobre metodos de envio y costo</small></span>
                        <br/>
                        <br/>
                        <span className="card-text"><small className="text-muted">Cantidad: {contador}</small></span> 
                        
                        <span className="Carro"><ItemCount Suma={aumentar} Resta={disminuir} /></span>
                        {contador< 5 ?
                        <span>Stock disponible</span>
                        : 
                        <span>Se agoto el stock</span>
                                
                        };
                        <Link to="/Cart"><br/><button type="button" onClick={() => addToCart(item, contador)} 
                        className="btn btn-success">Finalizar compra</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        </>
    )
    
}
    
