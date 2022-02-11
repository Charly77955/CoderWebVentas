import React, {useState, useEffect } from "react";
import { getFirestore } from "../../firebase/firebase"
import { useParams } from "react-router-dom";

export default function ItemFireDetail(){
    
    const params = useParams();
    const id = params.id;

    const [item, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = db.collection("itemsFire");

        const miItem = itemCollection.doc(id);

        miItem.get()
        .then((doc) => {

            console.log({id:doc.id, ...doc.data()})

            if(!doc.exists) {
                console.log('no existe ese documento');
                return
            }

            let obj = {id:doc.id, ...doc.data()}
            setItem(obj);
            console.log(item);
        })
        .catch((err) =>{
            console.log(err);
        })
    },[])

    return (
        <>
            
        </>
    
    );
}


