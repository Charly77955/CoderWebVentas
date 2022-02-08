import React, {useState, useEffect } from "react";
import { getFirestore } from "../../firebase/firebase"

export default function ItemDetail(){

    const [itemFire, setItemFire] = useState({});

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = db.collection("itemsFire");

        const miItem = itemCollection.doc('0oN9K3gm4yPIEPOCKbxF');

        miItem.get()
        .then((doc) => {

            if(!doc.exists) {
                console.log('no existe ese documento');
                return
            }
            console.log('item found');
            setItemFire({id: doc.id,...doc.data()});
        })
        .catch((err) =>{
            console.log(err);
        })
    },[])

    return (
        <>
        {JSON.stringify(itemFire)}
        </>
    
    );
}
