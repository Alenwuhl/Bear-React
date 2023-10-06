import React from 'react'
import { useState, useContext } from "react"
import { collection, addDoc, getFirestore } from "firebase/firestore"
import {CartContext} from "../context/ShoppingCartContext"
import { BsCart4 } from 'react-icons/bs';

const Form = () => {
  const { cart, setCarrito, vaciarCarrito } = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSumbit = (e) => {
        e.preventDefault()
        nombre === "" ? alert("campo nombre vacio") : alert(`Bienvenido, ${nombre}!`)
        email === "" ? alert("campo email vacio") : alert(`Registrado con el email: ${email}`)


        if (nombre !="" && email != "") {
            addDoc(ordersCollection, order). then(({ id }) => setOrderId(id))

        vaciarCarrito()
        alert("MUCHAS GRACIAS POR TU COMPRA")
        
        window.location.href="/"    
        }
        
    } 
console.log(cart)
    const order = {
        buyer:{
            nombre, email
        },
        items: cart.map(({id, Nombre, Precio}) => ({
            id, Nombre, Precio
        }))
    }

    const ordersCollection = collection(db, "orden")
  return (
    <div className="container-Form">
    <form onSubmit={handleSumbit} className="form-Form" action="">
        <p className="title-Form">COMPLETA TUS DATOS</p>
        <input onChange={(e) => setNombre(e.target.value)} placeholder="Nombre y apellido" className="username-Form input-Form" type="text"></input>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="username-Form input-Form" type="text"></input>
        <button className="btn-Form" type="submit">FINALIZAR COMPRA</button>
    </form>
</div>
  )
}

export default Form
