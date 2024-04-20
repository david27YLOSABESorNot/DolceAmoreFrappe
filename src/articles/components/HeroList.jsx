import { getProductByCategory } from "../helpers/getProductByCategory"
import TargetProduct from "./TargetProduct";

export const HeroList = ({category}) => {

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
        </div>
    )
}
