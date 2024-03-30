import React, { useState } from 'react'
import {NavLink, useLocation} from 'react-router-dom' 
import { NavFloatMovile } from '../articles/components'

export const NavBar = () => {

    const [active, setActive] = useState(false);
    const [navBar, setNavBar] = useState(false);

    const location = useLocation();

    const changeBackground = () => {
        if(window.scrollY >= 150){
            setNavBar(true);
        }
        else{
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <NavFloatMovile 
                active={active}
                setActive={setActive}
            />
            <nav  className={`nav ${location.pathname != '/inicio'  ? 'not-home' : navBar ? 'active' : ''}`}>

                <div className='contain '>
                    <div className='contain-nav'>

                        <NavLink to="/">
                            <h1 className="logo">Dolce Amore Frappe</h1>      
                        </NavLink>

                        

              

                        <div className='icons-links'>
                            <h2>Alfredo</h2>
                            <div className='contain-link-desk'>

                                <div className="links-adjust">
                                    <div className="links-desk">
                                        <NavLink to="snacks">Snacks</NavLink>
                                        <img src="/icons/iconoHamburguesa.png" alt="icono snacks" />
                                    </div>
                                    <div className="links-desk">
                                        <NavLink to="bebidas">Bebidas</NavLink>
                                        <img src="/icons/malteada.png" alt="icono malteada" />
                                    </div>                                
                                </div>

                            </div>

                            <NavLink to="carrito">
                                <img  className='car' src="/icons/shoppingCart.png" alt="icono carrito" />                                
                            </NavLink>

                            <img  onClick={() => setActive(true)} className="menu" src="/icons/iconoHamburguesa.png" alt="icono hamburguesa" />


                        </div>
                    </div>

                </div>
            </nav>    
        </>

    )
}


