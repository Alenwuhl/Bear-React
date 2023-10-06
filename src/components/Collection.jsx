/*import {useEffect, useState} from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const Collection = () => {
    const {categoria} = useParams()
    const [products, setProducts] = useState([])

useEffect(() => {
     const db = getFirestore()

     const itemsCollection = collection(db, `${categoria}`)
     getDocs(itemsCollection).then((snapshot)=> {
        const docs = snapshot.docs.map((doc) => doc.data())
        setProducts(docs)
     })
}, [])

  return (
    <div>
      <h1>Collection</h1>
      {
        products.map((p) =>(
            <div key={p.nombre}>
                <h4>producto: {p.nombre}</h4>
                <h5>categoría: {p.categoria}</h5>
                <h6>${p.precio}</h6>
            </div>
        ))
      }
    </div>
  )
}

export default Collection*/
