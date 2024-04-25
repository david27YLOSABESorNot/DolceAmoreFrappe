import { useContext } from "react";
import { currencyFormatter } from "../helpers/currencyFormatter";
import { UserContext } from "../../context/userContext";



const ArticleBuyed = ({id, name, price, cuantityFormat}) => {

    const {calculateAmount, deleteProduct} = useContext(UserContext);
    let img = `/imageProducts/${id}.avif`;
    const priceFormated = currencyFormatter({currency: 'MXN'}, price);
    const amount = calculateAmount(price, cuantityFormat);


    

    return (
        <div className="single-contain-carrito">
            <img src={img} alt={name} />

            <div className="description-article">
                <h4>{name}</h4>
                <p>{priceFormated}</p>
            </div>

            <div className="cuantity">
                <p>{cuantityFormat}</p>
            </div>
            <div className="toPay">
                <p>{amount}</p>
            </div>
            <button onClick={() => deleteProduct(id)}  className="button-delete" >X</button>
        

        </div>
    )
}

export default ArticleBuyed;
