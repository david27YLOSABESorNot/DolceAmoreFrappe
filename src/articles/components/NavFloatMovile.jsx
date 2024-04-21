import {NavLink} from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { useContext } from 'react';

export const NavFloatMovile = ({active, setActive}) => {
    
    const {infoUser} = useContext(UserContext);
    const userName = infoUser.nombre;


    return (
    <div className={`contain-nav-float ${active ? 'show' : ''}`}>

        <div className="contain-links-float">

            <img onClick={() => setActive(false)} className="close-icon" src="/icons/close.svg" alt="icon close" />
            <div className='adjust-float'>
                <p className="user-name-mobile">{userName}</p>
                <nav >

                    
                    
                    <div className="links-float">
                        <NavLink onClick={() => active && setActive(false)} to="snacks">Snacks</NavLink>

                    </div>
                    <div className="links-float">
                        <NavLink onClick={() => active && setActive(false)} to="bebidas">Bebidas</NavLink>
                        
                    </div>
                 
                </nav>               
            </div>
        </div>
      
    </div>
  )
}

