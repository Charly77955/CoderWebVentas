import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/firebase"
import { Link } from "react-router-dom";



export default function ItemFireContainer() {

    const [itemsFire, setItemsFire ] = useState([]);

    useEffect(() => {

        const db = getFirestore();

        const itemsFireCollection = db.collection("itemsFire");
        

        itemsFireCollection.get()
        .then((querySnapShot) => {

            

            if (querySnapShot.size === 0) {
                console.log('no hay documentos con ese query');
                return
            } 
            console.log('hay documentos');
            
            
            setItemsFire(querySnapShot.docs.map((doc)=> {
                return {id: doc.id,...doc.data()}
            }));
        } )
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    
return (
    <div className="d-flex">
    <>
    {itemsFire.map((item, i) => (
    <div key={i} >
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
    </>
    </div>
    
);
}