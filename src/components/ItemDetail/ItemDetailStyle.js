import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemDetailStyle = (props) => {
    const { item } = props;
    const [contador, setContador] = useState(0);

    function onAdd(cantidad) {
        alert('agregar ' + cantidad);
        // setItemCount(false);
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
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_666183-MLA43135791187_082020-O.webp" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item?.titulo}</h5>
                        <p className="card-text">Fernet Branca 3Lts tamaño fiesta para que nunca se termine</p>
                        <p className="card-text"><small className="text-muted">Consulte sobre metodos de envio y costo</small></p>
                        <p className="card-text"><small className="text-muted">Cantidad: {contador}</small></p>
                        {contador< 5 ?
                        <p className="Carro"><ItemCount Suma={aumentar} Resta={disminuir} /></p>
                        : <Link to="/Carrito"><button type="button" class="btn btn-success">Finalizar compra</button></Link>                        
                        }
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
    
}
    
