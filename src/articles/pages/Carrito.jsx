import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import ArticleBuyed from "../components/ArticleBuyed";


export const Carrito = () => {
  const {infoUser, addArticle} = useContext(UserContext);
  const nameUser = infoUser.nombre;


  console.log(addArticle.length);

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

      </div>


    </div>
  )
}


