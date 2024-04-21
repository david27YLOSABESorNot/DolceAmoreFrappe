import { currencyFormatter } from "../helpers/currencyFormatter";



const TargetProduct = ({id, name, infoAditional, price, category}) => {


    const urlImage = `/imageProducts/${id}.avif`;
    const priceFormated = currencyFormatter({currency: 'MXN'}, price);


    return (
        <div className="target-contain">
            <div className="contain-img-card">
                <img src={urlImage} alt="name" />
            </div>
            

            <div className="info-target">
                <h3>{name}</h3>
                <p className="aditional">{infoAditional}</p>
                <p className="price">{priceFormated}</p>
                <button>Añadir</button>
            </div>
        </div>
    )
}

export default TargetProduct
