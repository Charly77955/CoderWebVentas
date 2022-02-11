import React, {useState, useEffect } from "react";
import { getFirestore } from "../../firebase/firebase"
import { useParams } from "react-router-dom";
import { ItemDetailStyle } from "./ItemDetailStyle";

export default function ItemFireDetail(){
    
    const params = useParams();
    const id = params.id;

    const [PromesaDetallesbtn, setPromesaDetallesbtn] = useState(false);
    const [producto, setProducto] = useState(2);

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = db.collection("itemsFire");

        const miItem = itemCollection.doc(id);

        miItem.get()
        .then((doc) => {

            
            if(!doc.exists) {
                console.log('no existe ese documento');
                return
            }
            
            const obj = {id:doc.id, ...doc.data()}
            setProducto(obj)
            setPromesaDetallesbtn(true);
        })
        .catch((err) =>{
            console.log(err);
        })
    },[])

    return (
        <>
                     <div>
          
          {(PromesaDetallesbtn) ?
              <ItemDetailStyle item={producto}></ItemDetailStyle>
              :
              <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
               
              </div>
           
           
           
          }
      
      </div>
        </>
    
    );
}


