import React from "react";
import Carrito from './ShoppingCart.js'
import {FaBars} from 'react-icons/fa'
import { Nav, NavLink, Bars, NavMenu,
    NavBtn, NavBtnLink} from './NavStyles';

import CartWidget from './CartWidget';



const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h3>Logo</h3>

                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/Inicio" activeStyle>
                        Inicio

                    </NavLink>
                    <NavLink to="/Productos" activeStyle>
                        Productos
                    </NavLink>
                    <NavLink to="/Servicios" activeStyle>
                        Servicios
                    </NavLink>
                    <NavLink to="/Nosotros" activeStyle>
                        Nosotros
                    </NavLink>
                    <NavLink to="/Ayuda" activeStyle>
                        Ayuda
                    </NavLink>
                        <NavBtn>
                         <NavBtnLink to="Carrito"  target="_blank"><CartWidget /></NavBtnLink>
                         
                        </NavBtn>
                        <NavBtn>
                            <NavBtnLink to="/Ingresar"><h5>Ingresar</h5></NavBtnLink>
                        </NavBtn>  


                </NavMenu>
                
                    
                    
                    

            </Nav>





        </>



    )

}
export default NavBar