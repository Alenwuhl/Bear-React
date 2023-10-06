import React, { useEffect } from 'react'
import ItemCount from "./ItemCount"
import { useParams } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../context/ShoppingCartContext"
import ShoppingCartProvider from '../context/ShoppingCartContext'


const ItemDetail = ({ producto }) => {


  const { cart, agregarAlCarrito } = useContext(CartContext);

  //var cantidad = useState(1)

  //useEffect(()=>console.log(cantidad),[cantidad])

  const handleAmount = (cant) => {
    agregarAlCarrito(producto, cant)
  }
  return (
    <div className="card-Detail">
      <div className="card-front-Detail">
        <p className="title-Detail">{producto.Nombre}</p>
        <p className="subtitle-Detail">${producto.Precio}</p>
      </div>
      <div className="card-back-Detail">
        <ItemCount
          handleAdd={handleAmount}/>
      </div>
    </div>
    /*<div className="container">
    <div className="producto-detalle">
        <img src={producto.imagen} alt={producto.titulo} />
        <div>
            <h3 className="titulo">{producto.Nombre}</h3>
            <p className="descripcion">{producto.Descripción}</p>
            <p className="precio">${producto.Precio}</p>
            <ItemCount
              handleAdd={handleAmount}
            />
        </div>
    </div>
</div>*/
  )
}

export default ItemDetail
