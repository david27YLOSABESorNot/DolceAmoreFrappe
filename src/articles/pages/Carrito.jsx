import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import ArticleBuyed from "../components/ArticleBuyed";
import { NavLink } from "react-router-dom";


export const Carrito = () => {
  const {infoUser, addArticle, calculateTotalAmount} = useContext(UserContext);
  const nameUser = infoUser.nombre;
  const [amountTotal, setAmountTotal] = useState(0);

  useEffect(()=> {

   setAmountTotal(calculateTotalAmount(addArticle))

  }, [addArticle])


  
  



  return (
    <div className={`contain contain-buy-description ${addArticle.length == 0 ? 'margin-adjust' : ''}`}>
      <h2 className="heading-carrito">Hola {nameUser}, Aqui Estan Tus Pedidos.</h2>

      <div className="contain-carrito">
        {
          addArticle.map(article => (
            <ArticleBuyed
              key={article.id}
              {...article}
            />
          ))
        }

        {addArticle.length > 0 && (
          <section className="pay-section">
            <p className="total-pay">Total a pagar: <span>{amountTotal}</span></p>
            <NavLink className='pay'>
              Ir a pagar
            </NavLink>          
          </section>
        )}

      </div>


    </div>
  )
}


