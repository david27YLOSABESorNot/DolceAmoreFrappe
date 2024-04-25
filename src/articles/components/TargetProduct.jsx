import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { currencyFormatter } from "../helpers/currencyFormatter";
import { useForm } from "../../hook/useForm";



const TargetProduct = ({id, name, infoAditional, price}) => {

    
    const priceFormated = currencyFormatter({currency: 'MXN'}, price);
    const {addProduct, setMessageAdd} = useContext(UserContext);
    const {onInputChange, cuantity} = useForm({ cuantity: 0})
    const urlImage = `/imageProducts/${id}.avif`;
    const [messageError, setMessageError] = useState('');
    const cuantityFormat = parseInt(cuantity);

    const validateProductAdd = () => {
        
        if(cuantity < 1 ){
            setMessageError('No es una cantidad valida.')

            return;
        }

        setMessageError('');
        addProduct({id, name, infoAditional, price, cuantityFormat})
        setMessageAdd('Se ha agregado un producto al carrito')

        setTimeout(() => {
            setMessageAdd('')
        }, 3000);
        
    }



    return (
        <div className="target-contain">
            <div className="contain-img-card">
                <img src={urlImage} alt="name" />
            </div>
            

            <div className="info-target">
                <h3>{name}</h3>
                <p className="aditional">{infoAditional}</p>
                <p className="price">{priceFormated}</p>

                <p>{messageError}</p>
                <div className="cuantity-form">
                    <p>Cantidad:</p>
                    <input type="number" value={cuantity} onChange={e => onInputChange(e)} name={'cuantity'} placeholder="0"  />
                </div>
                <button onClick={(e) => validateProductAdd(e)}>Añadir</button>
            </div>
        </div>
    )
}

export default TargetProduct
