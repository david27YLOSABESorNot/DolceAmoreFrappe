import { useEffect, useReducer, useState } from "react";
import { UserContext } from "./userContext"

export const UserProvider = ({children}) => {

    
    const [infoUser, setInfoUser] = useState(JSON.parse(localStorage.getItem('infoUser')) || {});
    const [logged, setLogged] = useState(JSON.parse(localStorage.getItem('logged')) || false);
    const [addArticle, setAddArticle] = useState([]);

    
    //Implementamos el localStorage

    useEffect(() => {
        localStorage.setItem('infoUser', JSON.stringify(infoUser));
    }, [infoUser])

    useEffect(() => {
        localStorage.setItem('logged', JSON.stringify(logged));
    }, [logged]);

    const addProduct = (product) => {

        
        setAddArticle([...addArticle, product]);
    }

  


    
    return (
        <UserContext.Provider  
            value={{setInfoUser, infoUser, setLogged, logged, addProduct, addArticle}}>
            {
                children
            }
        </UserContext.Provider>
    )
}