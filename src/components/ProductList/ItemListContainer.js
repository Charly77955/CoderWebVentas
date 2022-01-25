import React, { useEffect, useState } from "react";
import ProductStyle from './ProductStyle';



export default function Productos() {

    const [PromesaProductos, setPromesaProductos] = useState([false]);

    const [arrayDeProductos, setArrayDeProductos] = useState([]);
    const Productos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                [
                    {
                        id: '1',
                        titulo: 'Set Matero',
                        descripcion: 'Set Matero con mate, bombilla, termo y bolso para llevar',
                        precio: '$2000',
                        imagen: 'https://image.freepik.com/foto-gratis/te-infusible-sobre-madera_144627-20539.jpg'
                    },
                    {
                        id: '2',
                        titulo: 'Set Matero 2',
                        descripcion: 'Set Matero con mate, bombilla, termo y bolso para llevar',
                        precio: '$3000',
                        imagen: 'https://image.freepik.com/foto-gratis/tetera-tradicional-china-o-japonesa-taza-te-mantel-individual_23-2148186327.jpg'
                    },
                ]);
        }, 2000)

    });
    useEffect(() => {
        Productos.then(res => {

            setPromesaProductos(true);
            setArrayDeProductos(res);



        })
    }, [])
    return (
            <div>
            {(PromesaProductos) ?
                <div className="d-flex">
                    {arrayDeProductos.map(Item => {
                        // return <p>hola</p>
                        return <ProductStyle key={Item.id} item={Item}></ProductStyle>
                    })}
                </div>
                :
                <>Loading...</>
                 
             }
            </div> 
        )
        
    }