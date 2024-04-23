import { useEffect, useReducer, useState } from "react";
import { UserContext } from "./userContext";
import { currencyFormatter } from "../articles/helpers/currencyFormatter";


export const UserProvider = ({children}) => {

    
    const [infoUser, setInfoUser] = useState(JSON.parse(localStorage.getItem('infoUser')) || {});
    const [logged, setLogged] = useState(JSON.parse(localStorage.getItem('logged')) || false);
    const [addArticle, setAddArticle] = useState([]);
    const [messageAdd, setMessageAdd] = useState('');

    
    //Implementamos el localStorage

    useEffect(() => {
        localStorage.setItem('infoUser', JSON.stringify(infoUser));
    }, [infoUser])

    useEffect(() => {
        localStorage.setItem('logged', JSON.stringify(logged));
    }, [logged]);

    const addProduct = (product) => {

        const existingProductIndex = addArticle.findIndex( article => article.id === product.id);

       
        if(existingProductIndex !== -1){
            const updateCart = [...addArticle];
            updateCart[existingProductIndex].cuantityFormat = product.cuantityFormat;
            setAddArticle(updateCart);

        
        
        }else{
            setAddArticle([...addArticle, product]);
        }
    }

    const calculateAmount = (price, cuantityFormat) => {
        
        const amount = price * cuantityFormat;
        return  currencyFormatter({currency: 'MXN'}, amount);
    }

    const calculateTotalAmount = (products) => {

        let total = 0;
        products.map( product =>  total += product.cuantityFormat * product.price );
        return currencyFormatter({currency: 'MXN'}, total);
    }

  


    
    return (
        <UserContext.Provider  
            value={{setInfoUser, infoUser, setLogged, logged, addProduct, addArticle, calculateAmount, calculateTotalAmount, setMessageAdd, messageAdd}}>
            {
                children
            }
        </UserContext.Provider>
    )
}