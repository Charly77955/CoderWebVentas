import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/firebase"


export default function ItemListContainer() {

    const [itemsFire, setItemsFire ] = useState({});

    useEffect(() => {

        const db = getFirestore();

        const itemsFireCollection = db.collection("ItemsFire");
        

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
    <>
    {JSON.stringify(itemsFire)}
    </>
    
);
}