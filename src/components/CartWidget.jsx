import React from 'react'
import { BsCart4 } from 'react-icons/bs';


const CartWidget = () => {
  return (
    <div className='CartWidget'>
      <div className='BsCart4'>
        <BsCart4/>
      </div>
      <p>  Carrito (0)</p>
    </div>
  )
}

export default CartWidget
