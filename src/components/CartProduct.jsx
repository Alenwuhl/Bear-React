import React from "react"

const CartProduct = (props) => {
    const {prod, index} = props
    console.log("props", props)

    return (
        <div key={index} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
            <div className="mr-1"><img className="rounded" src="https://i.imgur.com/XiFJkhI.jpg" width="70"></img></div>
            <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{prod.Nombre}</span>
            </div>
            <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger"></i>
                <h5 className="text-grey mt-1 mr-1 ml-1">2</h5><i className="fa fa-plus text-success"></i></div>
            <div>
                <h5 className="text-grey">${prod.Precio}</h5>
            </div>
            <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger"></i></div>
        </div>
    )
}
export default CartProduct;