import React, {useState, useRef, useContext} from "react";
import firebase from "firebase";
import { getFirestore } from "../../firebase/firebase";
import { cartContext } from "../Context/CartProvider";




export default function TestForm(props){
    const { cart } = useContext( cartContext );

    const total = props.total;

    const [orderId, setOrderId] = useState('');

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    


    function handleClick(){

        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,

            },
                items:[{cart}],
                total:[{total}],
                
             date: firebase.firestore.Timestamp.fromDate(new Date())

        }   
        console.log(miOrden);
        orders.add(miOrden)
            .then(({id})  => {
                console.log('orden ingresada: ' + id);
                setOrderId(id);
            } )
            .catch((err) =>{
                console.log(err);
            });
 }
            return(
                <>
                {orderId && (<h1>Tu order es {orderId}</h1>)}

                <div className="Form">
                    <h3>Ingresa tus datos: </h3>
                    <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apellido"/>
                    <br/>
                    <input type="text" name="mobile" ref={mobileRef} placeholder="Nro de celular"/>
                    <br/>
                    <input type="text" name="email" ref={emailRef} placeholder="Email"/>
                    <br/>
                    <input type="text" name="state" ref={stateRef} placeholder="Provincia"/>
                    <br/>
                    <input type="text" name="city" ref={cityRef} placeholder="Ciudad"/>
                    <br/>
                    <input type="text" name="address" ref={addressRef} placeholder="Direccion"/>
                    <br/>
                    <button onClick={()=> handleClick()}>Terminar</button>
                </div>
                </>
            );
        }