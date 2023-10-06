import React from 'react'
import { useState, createContext, useEffect } from "react";

export const CartContext = createContext()
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

const ShoppingCartProvider = ({ children }) => {

    const [cart, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (producto, cantidad) => {
        const productoAgregado = { ...producto, cantidad };
        console.log(cantidad)
        console.log(productoAgregado)
        console.log(productoAgregado.id)

        const nuevoCarrito = [...cart];
        console.log(nuevoCarrito)
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === productoAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(productoAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        return cart.reduce((acc, producto) => acc + producto.cantidad, 0);
    }

    const precioTotal = () => {
        return cart.reduce((acc, producto) => acc + producto.Precio * producto.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(cart));
    }, [cart])
    
    const handleDeleteProduct = (pro) => {
        setCarrito(cart.filter((p)=>{
            if(p.id !== pro.id){
                return p
            }else{
                p.cantidad--;
                if(p.cantidad > 0){
                    return p
                }
            }
        }))
    }



    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            cantidadEnCarrito,
            precioTotal,
            vaciarCarrito,
            handleDeleteProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider
