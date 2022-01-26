
import React, {useEffect, useState} from "react";
import ProductStyle from "../ProductList/ProductStyle";
import { ItemDetailStyle } from "./ItemDetailStyle";

export default function ItemDetail () {

    const  [ PromesaDetallesbtn, setPromesaDetallesbtn ] = useState(false)
    const  [ DetalleProducto, setDetalleProducto ] = useState(null)

    const  Detallesbtn = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(
                {
                    id: '1',
                    titulo: 'Set matero',
                    descripcion: 'Set matero con mate, termo, bombilla y bolso para llevar incluido',
                    precio: '$2000',
                    imagen: 'https://image.freepik.com/foto-gratis/te-infusible-sobre-madera_144627-20539.jpg'
                }
        )}, 2000)
    });

    useEffect(()=> {
        Detallesbtn.then(res=>{
            setPromesaDetallesbtn(true);
            setDetalleProducto(res);
        })
    }, [])

    return(
        <div>
            {(PromesaDetallesbtn) ?
            <ItemDetailStyle key={DetalleProducto?.id} item={DetalleProducto}></ItemDetailStyle>
                :
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
        </div>
    )


}