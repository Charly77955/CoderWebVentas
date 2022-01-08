import React from "react";

import {FaBars} from 'react-icons/fa'
import { Nav, NavLink, Bars, NavMenu,
    NavBtn, NavBtnLink} from './NavStyles';


const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>

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


                </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/Ingresar">Ingresar</NavBtnLink>
                    </NavBtn>

            </Nav>





        </>



    )

}
export default NavBar