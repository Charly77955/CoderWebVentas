
import React, { useEffect, useState, onAdd } from "react";
import ProductStyle from "../ProductList/ProductStyle";
import { ItemDetailStyle } from "./ItemDetailStyle";
import Carrito from "../Carrito";
import { Link } from "react-router-dom";
import Contador from "../CarritoEnItemDetail";

export default function ItemDetail() {

    const [PromesaDetallesbtn, setPromesaDetallesbtn] = useState(false)
    const [DetalleProducto, setDetalleProducto] = useState(null)

    const Detallesbtn = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                {
                    id: '1',
                    titulo: 'Fernet Branca 3Lts',
                    descripcion: 'Fernet Branca 3Lts tamaño fiesta para que nunca se termine',
                    precio: '$2000',
                    imagen: 'https://http2.mlstatic.com/D_NQ_NP_666183-MLA43135791187_082020-O.webp'
                }
            )
        }, 2000)
    });

    useEffect(() => {
        Detallesbtn.then(res => {
            setPromesaDetallesbtn(true);
            setDetalleProducto(res);
        })
    }, [])

    return (
        <div>
            
            {(PromesaDetallesbtn) ?
                <ItemDetailStyle  key={DetalleProducto?.id} item={DetalleProducto}></ItemDetailStyle>
                :
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    
                </div>
                
                
                
            }
           
        </div>
    )
        function Contador({Carrito}) {

        const [mostrarCarrito, setMostrarCarrito] = useState(true);
        
        function onAdd(Cantidad){
            alert('Agregar' + Cantidad);
            setMostrarCarrito(false);
        }
        return (
            <>
                
                {
                    (mostrarCarrito)?
                    <Carrito Carrito={Carrito} onAdd={onAdd}/>
                    :
                    
                        <button>Terminar compra</button>
                        
                        
                    
                }
                
            </>
    
        );
    
    
    
    }
    
}
