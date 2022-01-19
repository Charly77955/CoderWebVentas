import React, { useState, useEffect } from "react";
import Producto from "./Product";

export default function ProductList() {
    
    const [PromesaProductos, setPromesaProductos] = useState(false);
    const [arrayDeProductos, setArrayDeProductos] = useState([]);

    const productosEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(Producto);
        }, 2000)
    });

    useEffect(() => {

        productosEnStock.then(res => {
            setPromesaProductos(true);
            setArrayDeProductos(res);

        })
            .catch(err => {
                setPromesaProductos(true);
                console.log(err);
            });
    })
    return (
        <>
            {PromesaProductos} ?
            <>
                {arrayDeProductos.map(Producto => {
                    return <div><p>{Producto}</p></div>
                })}
            </>
            :
            <>Loading...</>
        </>
    )
}



























