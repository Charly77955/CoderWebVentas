
import React, { Component } from "react";

import Productos from "../Productos/Productos.json";
import { Link } from "react-router-dom";

export class ItemListContainer extends Component {
    render() {
        return (
            <>
                <div className="d-flex">
                    
                        
                            
                            {Productos.Productos.map((item, i) => (
                                <div key={i}>
                                    <div className="card" style={{width: "18rem"}}>
                                    <img src={item.imagen} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                    <h5 className="card-title">{item.titulo}</h5>
                                    <span className="card-text">{item.descripcion}</span><br/>
                                    
                                    
                                    <Link id="RouterNavLink" to={"/ItemDetail/" + item.id} >
                                        <button type="button" className="btn btn-primary" 
                                        style={{Color:"white"}}>{item.precio}</button></Link>
                                    </div>
                                    </div>
                                    

                                    
                                    
                                </div>
                            ))}
                        
                    
                </div>
            </>
        
        );
        
    }

}

export default ItemListContainer;