
export const LoginPage = () => {
  return (
    <div className="contain-form-global">
        <div className="contain-form">
          <h1 className="title-logo">Dolce Amore Frappe</h1>
          <form className="form-login" action="">
            <div className="fields">
              <label htmlFor="">Nombre: </label>
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="fields">
              <label htmlFor="">Apellidos: </label>
              <input type="text" placeholder="Apellidos" />
            </div>
            <div className="fields">
              <label htmlFor="">Email: </label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="fields">
              <label htmlFor="">Password: </label>
              <input type="password" placeholder="Contraseña" />
            </div>

            <input  type="submit" value="Registrar" />
          </form>
        </div>
    </div>
  )
}

