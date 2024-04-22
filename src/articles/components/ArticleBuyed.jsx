

const ArticleBuyed = ({id, name, infoAditional, price, category}) => {

    let img = `/imageProducts/${id}.avif`;
    

    return (
        <div className="single-contain-carrito">
            <img src={img} alt={name} />

            <div className="description-article">
                <h4>{name}</h4>
                <p>{price}</p>
            </div>

            <div className="cuantity">
                <p>4</p>
            </div>
            <div className="toPay">
                <p>$340</p>
            </div>


        </div>
    )
}

export default ArticleBuyed
