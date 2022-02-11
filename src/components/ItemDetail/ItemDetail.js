// import React, { useEffect, useState, useContext} from "react";
// import ProductStyle from "../ProductList/ProductStyle";
// import { ItemDetailStyle } from "./ItemDetailStyle";
// import { Link, useParams } from "react-router-dom";
// import Productos from "../Productos/Productos.json";

// export default function ItemDetail(props) {    
//     const params = useParams();
//     const id = params.id;
//     const [producto, setProducto] = useState(null);
//     const [PromesaDetallesbtn, setPromesaDetallesbtn] = useState(false);

//     useEffect(()=>{
//         let prodSeleccionado = Productos.Productos.filter(x => x.id === id);
//         if(prodSeleccionado){
//             setProducto(prodSeleccionado[0])
//             setPromesaDetallesbtn(true);
//         }
//     }, []);

//     return (
//         <div>
            
//             {(PromesaDetallesbtn) ?
//                 <ItemDetailStyle item={producto}></ItemDetailStyle>
//                 :
//                 <div className="spinner-border" role="status">
//                     <span className="visually-hidden">Loading...</span>
                    
//                 </div>
                
                
                
//             }
           
//         </div>
//     )         
// }
