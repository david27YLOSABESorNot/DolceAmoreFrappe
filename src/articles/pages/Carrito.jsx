import { useContext } from "react";
import { UserContext } from "../../context/userContext";


export const Carrito = () => {

  let products = [];
  const {infoUser} = useContext(UserContext);
  

  const nameUser = infoUser.nombre;
    

  return (
    <div className={`contain contain-buy-description ${products.length === 0 ? 'margin-adjust' : ''}`}>
      <h2 className="heading-carrito">Hola {nameUser}, Aqui Estan Tus Pedidos.</h2>
    </div>
  )
}


