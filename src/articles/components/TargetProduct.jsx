

const TargetProduct = ({id, name, infoAditional, price, category}) => {


    const urlImage = `/public/imageProducts/${id}.avif`;


    return (
        <div className="target-contain">
            <img src={urlImage} alt="name" />

            <div className="info-target">
                <h3>{name}</h3>
                <p>{infoAditional}</p>
                <p>{price}</p>
                <button>Añadir</button>
            </div>
        </div>
    )
}

export default TargetProduct
