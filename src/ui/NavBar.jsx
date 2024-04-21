import React, { useContext, useState } from 'react'
import {NavLink, useLocation, useNavigate} from 'react-router-dom' 
import { NavFloatMovile } from '../articles/components'
import { UserContext } from '../context/userContext';

export const NavBar = () => {

    const [active, setActive] = useState(false);
    const [navBar, setNavBar] = useState(false);
    const {infoUser, logged, setLogged} = useContext(UserContext);
    const location = useLocation();
    const userName = infoUser.nombre;


    const changeBackground = () => {
        if(window.scrollY >= 150){
            setNavBar(true);
        }
        else{
            setNavBar(false);
        }
    }

    const onLogout = () => {
        setLogged(false);
        localStorage.removeItem('infoUser');
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
                            <h2 className="user-name-desk">{userName ? userName : ''}</h2>
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

                            {
                                logged ? (
                                    <button onClick={onLogout} className='button-login'>
                                        Logout
                                    </button>
                                ):
                                (
                                    <NavLink to={'login'} className='login-text'>
                                        Login
                                    </NavLink>
                                )
                            }

                            <img  onClick={() => setActive(true)} className="menu" src="/icons/iconoHamburguesa.png" alt="icono hamburguesa" />

        



                        </div>
                    </div>

                </div>
            </nav>    
        </>

    )
}


