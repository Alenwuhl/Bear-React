import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import '../main.css'
import { BsFillGridFill } from 'react-icons/bs';
import { GiBearFace } from 'react-icons/gi';

const NavBar = () => {
  return (
    <div className='NavBar'>
        <div className='logo'>
            <div className='GiBearFace'>
                <GiBearFace/>
            </div>
            <div>
                Bear-uy
            </div>
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
                <MenuItem>Categoría A</MenuItem>
                <MenuItem>Categoría B</MenuItem>
                <MenuItem>Categoría C</MenuItem>
            </MenuList>
        </Menu>
        <div className='CarritoIcon'>
            <CartWidget />
        </div>
    </div>
  )
}

export default NavBar
