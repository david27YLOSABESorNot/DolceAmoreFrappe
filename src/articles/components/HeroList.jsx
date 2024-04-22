import { useContext, useEffect, useState } from "react";
import { getProductByCategory } from "../helpers/getProductByCategory"
import TargetProduct from "./TargetProduct";
import { UserContext } from "../../context/userContext";

export const HeroList = ({category}) => {
    const {addArticle} = useContext(UserContext);
    const products = getProductByCategory(category);
    const [messageAdd, setMessageAdd] = useState('');

    useEffect(() => {

        if(addArticle.length > 0){
            let {name} = addArticle.slice(-1)[0];

            setMessageAdd(name);
            
            setTimeout(() => {
                setMessageAdd('');
            }, 3000);
        
        }

    }, [addArticle])

    return (
        <div className="containCardsProducts contain-products ">
            {
                products.map( product => (
                    <TargetProduct
                        key={product.id}
                        {...product}
                    />
                ))
            }

            {
                messageAdd ? (
                    <div className="contain-alert-add">
                        <h5>Se agrego el siguiente producto:</h5>
                        <p>{messageAdd}</p>
                    </div>
                ): null
            }
        </div>
    )
}
