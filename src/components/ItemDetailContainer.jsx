import React from 'react'
import ItemDetail from "./ItemDetail"
import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState([])


    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "Bear", `${id}`)
        getDoc(oneItem).then((snapshot)=> {
            if(snapshot.exists()){
                const docs = snapshot.data()
                docs.id=id
                setProducto(docs)
            }
        })
    }, [])
  return (
    <div className='detail-Container'>
        {producto && <ItemDetail producto={producto} />}
    </div>
  )
}

export default ItemDetailContainer
