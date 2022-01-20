import React, { useEffect, useState } from "react";
import ProductStyle from './ProductList';



export default function Productos() {

    const [PromesaProductos, setPromesaProductos] = useState([false]);

    const [arrayDeProductos, setArrayDeProductos] = useState([]);
    const Productos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Mate',
                'Set Matero',
                'Set Matero con mate, bombilla, termo y bolso para llevar',
                '$2000',
                'URL']);
        }, 2000)

    });
    useEffect(() => {
        Productos.then(res => {

            setPromesaProductos(true);
            setArrayDeProductos(res);



        })
    })
    return (
            <div>
            {(PromesaProductos) ?
                <>
                    {arrayDeProductos.map(Item => {
                        return <div><ProductStyle><p>{Item}</p></ProductStyle></div>
                    })}
                </>
                :
                <>Loading...</>
                 
             }
            </div> 
        )
        
    }