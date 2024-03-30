import {NavLink} from 'react-router-dom';

export const NavFloatMovile = ({active, setActive}) => {
  
    return (
    <div className={`contain-nav-float ${active ? 'show' : ''}`}>

        <div className="contain-links-float">

            <img onClick={() => setActive(false)} className="close-icon" src="/icons/close.svg" alt="icon close" />
            <div className='adjust-float'>
                <nav >
                    
                    <div className="links-float">
                        <NavLink onClick={() => active && setActive(false)} to="snacks">Snacks</NavLink>

                    </div>
                    <div className="links-float">
                        <NavLink onClick={() => active && setActive(false)} to="bebidas">Bebidas</NavLink>
                        
                    </div>
                    <div className="links-float">
                        <NavLink onClick={() => active && setActive(false)} to="login">Logout</NavLink>
                    </div>
                </nav>               
            </div>
        </div>
      
    </div>
  )
}

