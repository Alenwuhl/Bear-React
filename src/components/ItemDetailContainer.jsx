import React from 'react'
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    
    const productos = [
        { id: 1, nombre: "Teddy", descripcion: "Los buzos mas suaves y calentitos del país!", stock: 5, categoria: "Buzos" },
        { id: 2, nombre: "Remera XL", descripcion: "La tela más cómoda y la remera más cool del mercado!", stock: 10, categoria: "Remeras" },
        { id: 3, nombre: "Camisa a cuadros", descripcion: "Buscas una camisa abrigada? Aquí está lo que necesitas.", stock: 15, categoria: "Camisas" },
        { id: 4, nombre: "Buzo Jogging", descripcion: "Más fachero que estos no encontrarás. Si quieres ponerte a la moda, los mejores buzos de uso cotidiano", stock: 20, categoria: "Buzos" },
        { id: 5, nombre: "Camisa a rayas", descripcion: "Una camisa a rayas clásica para cualquier ocasión", stock: 8, categoria: "Camisas" },
        { id: 6, nombre: "Remera Estampada", descripcion: "Remera con estampados únicos y atractivos", stock: 12, categoria: "Remeras" },
        { id: 7, nombre: "Buzo Deportivo", descripcion: "Perfecto para tus actividades deportivas y al aire libre", stock: 6, categoria: "Buzos" },
        { id: 8, nombre: "Camisa Casual", descripcion: "Una camisa versátil para tu uso diario", stock: 25, categoria: "Camisas" },
        { id: 9, nombre: "Remera de Manga Larga", descripcion: "Ideal para mantener el calor en los días frescos", stock: 18, categoria: "Remeras" },
        { id: 10, nombre: "Buzo Elegante", descripcion: "Un buzo elegante para ocasiones especiales", stock: 10, categoria: "Buzos" }
      ]
    
    const getProductos = new Promise ((resolve, reject) => {
        if (productos.leght > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 3000)
        }else{
            reject(new Error("No hay productos"))
        }
      })

    getProductos
      .then((res) =>{
      })
      .catch((error) => {
        console.log(error)
      })

    return(
        <>
            <ItemDetail
                productos={productos}
            />
        </>
    )
}

export default ItemDetailContainer
