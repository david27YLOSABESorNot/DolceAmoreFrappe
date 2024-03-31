import { useContext } from "react";
import { useForm } from "../../hook/useForm"
import { UserContext } from "../../context/userContext";




export const LoginPage = () => {

 

  const {onInputChange, validateForm, alertEmail, alertEmpty, nameLarge, nombre, apellidos, email, password} = useForm({
    nombre: "",
    apellidos: "",
    email: "",
    password: ""
  });

  const {setInfoUser, setLogged} = useContext(UserContext);






  return (
    <div className="contain-form-global">
        <div className="contain-form">
          <h1 className="title-logo">Dolce Amore Frappe</h1>
          <form className="form-login" action="">
            {alertEmpty && <p className="alerts">Los Campos No Pueden Estar Vacios</p> }
            {alertEmail && <p className="alerts">El Email No Es Valido</p>}
            {nameLarge && <p className="alerts">El nombre es demsaiado largo</p>}
            <div className="fields">
              <label htmlFor="nombre">Nombre: </label>
              <input id="nombre" value={nombre} onChange={e => onInputChange(e) } name="nombre" type="text" placeholder="Nombre" />
            </div>
            <div className="fields">
              <label htmlFor="apellidos">Apellidos: </label>
              <input id="apellidos" value={apellidos} onChange={e => onInputChange(e) } name="apellidos"  type="text" placeholder="Apellidos" />
            </div>
            <div className="fields">
              <label htmlFor="email">Email: </label>
              <input id="email" value={email} onChange={e => onInputChange(e) } name="email"  type="email" placeholder="Email" />
            </div>
            <div className="fields">
              <label htmlFor="password">Password: </label>
              <input id="password" value={password} onChange={e => onInputChange(e) } name="password"  type="password" placeholder="Contraseña" />
            </div>

            <button
              onClick={(e) => validateForm(e, setInfoUser, setLogged) }
              className="btn-registrar">
              Registrarse
            </button>
          </form>
        </div>
    </div>
  )
}

