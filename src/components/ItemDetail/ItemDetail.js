
import React, {useEffect, useState} from "react";
import ProductStyle from "../ProductList/ProductStyle";
import { ItemDetailStyle } from "./ItemDetailStyle";

export default function ItemDetail () {

    const  [ PromesaDetallesbtn, setPromesaDetallesbtn ] = useState( [false])
    const  [ DetalleProducto, setDetalleProducto ] = useState(null)

    const  Detallesbtn = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(
                {
                    id: '1',
                    titulo: 'Set Matero',
                    descripcion: 'Set de te, jarron, tazas y bolso para llevar',
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
            <div><ItemDetailStyle key={Detallesbtn.id} item={Detallesbtn}></ItemDetailStyle></div>
                :
                <>Loading...</>
            }
        </div>
    )


}