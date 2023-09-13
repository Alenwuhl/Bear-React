import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import '../main.css'
import { BsFillGridFill } from 'react-icons/bs'
import { GiBearFace } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='NavBar'>
        <div className='logo'>
            <Link to={"/"}>
            <div className='logo-content'>
                <div className='GiBearFace'>
                <GiBearFace />
                </div>
                <div className='logo-text'>
                Bear-uy
                </div>
            </div>
            </Link>
        </div>
        <Menu className= "Categorias">
            <MenuButton className='BotonCategorias'>
                <div className='BotonCategorias'>
                    <div className='BsFillGridFill'>
                        <BsFillGridFill/>
                    </div>
                    Categorías
                </div>
            </MenuButton>
            <MenuList>
                <MenuItem>
                    <Link to={`/categoria/${"Buzos"}`}>
                        Buzos
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to={`/categoria/${"Remeras"}`}>
                        Remeras
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to={`/categoria/${"Camisas"}`}>
                        Camisas
                    </Link>
                </MenuItem>
            </MenuList>
        </Menu>
        <div className='CarritoIcon'>
            <Link to={"/cart"}>
                <CartWidget />
            </Link>
        </div>
    </div>
  )
}

export default NavBar
