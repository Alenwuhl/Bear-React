import React from 'react'
import '../main.css'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import Loading from './Loading'

const ItemListContainer = () => {
    const categoria = useParams().categoria
    const [productos, setProductos] = useState([])
    const [Nombre, setNombre] = useState("Productos")


useEffect(() => {
     const db = getFirestore()
     const itemsCollection = collection(db, `Bear`)
     getDocs(itemsCollection).then((snapshot)=> {
        const docs = snapshot.docs.map((doc) => 
        ({
          ...doc.data(), id: doc.id
        }))
        setTimeout(() => {
          setProductos(docs)
        }, 1500);
     })
}, [])
let productToRender= []


if(categoria == undefined){
  productToRender = productos
}else{
  productToRender = (productos.filter(prod => prod.Categoria === categoria))
}
  return (
    productos.length === 0 ? <Loading/> :
    <div>
      {
          <div>
            <ItemList productos={productToRender} Nombre={Nombre} />
          </div>
      }
    </div>
  )
}
export default ItemListContainer
