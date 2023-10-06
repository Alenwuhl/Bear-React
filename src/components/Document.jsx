/*import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const Document = () => {
    // const { id } = useParams()
    const [product, setProduct] = useState([])
    console.log(product)

    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "Bear", `${id}`)
        getDoc(oneItem).then((snapshot)=> {
            if(snapshot.exists()){
                const docs = snapshot.data()
                setProduct(docs)
            }
        })
    }, [])
  return (
    <div>
        <h1>Producto</h1>
        {
            <div>

            </div>
        }
      
    </div>
  )
}

export default Document*/


