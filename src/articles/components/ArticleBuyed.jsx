import { currencyFormatter } from "../helpers/currencyFormatter";



const ArticleBuyed = ({id, name, price, cuantity}) => {

    let img = `/imageProducts/${id}.avif`;
    const priceFormated = currencyFormatter({currency: 'MXN'}, price);

    return (
        <div className="single-contain-carrito">
            <img src={img} alt={name} />

            <div className="description-article">
                <h4>{name}</h4>
                <p>{priceFormated}</p>
            </div>

            <div className="cuantity">
                <p>{cuantity}</p>
            </div>
            <div className="toPay">
                <p>$340</p>
            </div>


        </div>
    )
}

export default ArticleBuyed
