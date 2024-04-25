import { useEffect, useReducer, useState } from "react";
import { UserContext } from "./userContext";
import { currencyFormatter } from "../articles/helpers/currencyFormatter";


export const UserProvider = ({children}) => {

    
    const [infoUser, setInfoUser] = useState(JSON.parse(localStorage.getItem('infoUser')) || {});
    const [logged, setLogged] = useState(JSON.parse(localStorage.getItem('logged')) || false);
    const [addArticle, setAddArticle] = useState(JSON.parse(localStorage.getItem('addArticle')) || []);
    const [messageAdd, setMessageAdd] = useState('');

    
    //Implementamos el localStorage para no perder los datos al momento de recargar

    useEffect(() => {
        localStorage.setItem('infoUser', JSON.stringify(infoUser));
    }, [infoUser])

    useEffect(() => {
        localStorage.setItem('logged', JSON.stringify(logged));
    }, [logged]);

    useEffect(() => {
        localStorage.setItem('addArticle', JSON.stringify(addArticle));
    }, [addArticle])

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

    const deleteProduct = (idProduct) => {


        const deleted = addArticle.filter( article => article.id !== idProduct);

        setAddArticle(deleted);

    

    
    }

  


    
    return (
        <UserContext.Provider  
            value={{setInfoUser, infoUser, setLogged, logged, addProduct, addArticle, calculateAmount, calculateTotalAmount, setMessageAdd, messageAdd, deleteProduct}}>
            {
                children
            }
        </UserContext.Provider>
    )
}