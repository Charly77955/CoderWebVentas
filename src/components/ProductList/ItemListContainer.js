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
                        titulo: 'Fernet Branca 3lts',
                        descripcion: 'Fernet Branca con tamaño fiesta para todos tus amigos',
                        precio: '$2000',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_666183-MLA43135791187_082020-O.webp'
                    },
                    {
                        id: '2',
                        titulo: 'Set Fernet Branca',
                        descripcion: 'Set de Fernet Branca 750ml con estuche y vaso de regalo',
                        precio: '$1200',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_951085-MLA48819074498_012022-O.webp'
                    },
                    {
                        id: '3',
                        titulo: 'Jarra Fernet Branca',
                        descripcion: 'Jarra Fernet Branca para personalizar tu recipiente al mejor gusto',
                        precio: '$1000',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_600701-MLA20377226008_082015-O.webp'
                    },
                    {
                        id: '4',
                        titulo: 'Dispenser Fernet Branca',
                        descripcion: 'Dispenser Fernet Branca para darle un toke mejorado a tu armado de tragos',
                        precio: '$1500',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_18147-MLA20150915734_082014-O.webp'
                    },
                    { 
                        id: '5',
                        titulo: 'Vaso medidor Fernet Branca',
                        descripcion: 'Vaso medidor Fernet Branca para armarlo con la medida exacta y disfrutarlo mejor',
                        precio: '$600',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_684901-MLA44997634158_022021-O.webp'
                    },
                    {
                        id: '6',
                        titulo: 'Set Matero Fernet Branca',
                        descripcion: 'Personaliza tus mates con este excelente set matero(solo para fanaticos del Fernet, no lo entenderian)',
                        precio: '$1600',
                        imagen: 'https://http2.mlstatic.com/D_NQ_NP_791946-MLA45645675795_042021-O.webp'
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