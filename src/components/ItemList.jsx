import React from "react"
import Item from "./Item"

const ItemList= ({ productos }) => {
    console.log(productos)
    return (
        <div>
            {
                productos.map((p) => {
                    return (
                        <div key={p.id}>
                            <Item producto={p}/>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
export default ItemList
