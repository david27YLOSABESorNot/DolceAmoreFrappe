import { useEffect, useReducer, useState } from "react";
import { UserContext } from "./userContext"
import { authReducer } from "./authReducer";




export const UserProvider = ({children}) => {

    const [infoUser, setInfoUser] = useState(JSON.parse(localStorage.getItem('infoUser')) || {});
    const [logged, setLogged] = useState(JSON.parse(localStorage.getItem('logged')) || false);

    //Implementamos el localStorage

    useEffect(() => {
        localStorage.setItem('infoUser', JSON.stringify(infoUser));
    }, [infoUser])

    useEffect(() => {
        localStorage.setItem('logged', JSON.stringify(logged));
    }, [logged])


    
    return (
        <UserContext.Provider  
            value={{setInfoUser, infoUser, setLogged, logged}}>
            {
                children
            }
        </UserContext.Provider>
    )
}