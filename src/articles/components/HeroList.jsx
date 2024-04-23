import { useContext, useEffect, useState } from "react";
import { getProductByCategory } from "../helpers/getProductByCategory"
import TargetProduct from "./TargetProduct";
import { UserContext } from "../../context/userContext";

export const HeroList = ({category}) => {

    const {messageAdd} = useContext(UserContext);
    const products = getProductByCategory(category);

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
                        <p>{messageAdd}</p>
                    </div>
                ): null
            }
        </div>
    )
}
