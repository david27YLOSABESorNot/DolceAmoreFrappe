



export const Inicio = () => {
  return (
    <>
        <header className="header">
          <div className="title-page">
            <h1>Dolce Apmore Frappe</h1>
            <p>El sazon de una verdadera mujer</p>
          </div>
        </header>

        <section className="about-us">

          <div className="contain">

            <p className="title-section">Sobre Nosotros</p>
            <div className="contain-about-us">
              <img src="/designImages/frappeOreo.avif" alt="imagen nosotros" />

              <div className="about-us-info">
                <p>
                  La Alameda es un proyecto que nace con la idea de brindar 
                  un ambiente cálido y acogedor mientras disfrutas de nuestra 
                  comida o de algo para tomar.Nuestra parrilla da un toque especial 
                  a nuestras hamburguesas y carnes, a buen precio y con la mejor calidad.
                </p>
              </div>
            
            </div>

          </div>

        </section>

        <section className="for-you-section">

          <div className="contain-images-adjust">
            <p className="title-section">¿Que Tenemos Para Ti?</p>

            <div className="contain-images">
                <div className="block-one blocks">

                  <div className="img-one box " >
                    <img src="/designImages/hamburguesaPapas.avif" alt="Hamburguesa con papas" />

                    <div className="shadow">
                     <p className="title-box">Hamburguesas</p>     
                    </div>
                   
                  </div>

                  <div className="img-two box">
                    <img  src="/designImages/AlitasImagen.avif" alt="Imagen alitas" />
                    <div className="shadow">
                      <p className="title-box">Alitas</p>     
                    </div>
                  </div>

                  <div className="img-twree box">
                    <img  src="/designImages/tacosPastor.avif" alt="Tacos pastor" />
                    <div className="shadow">
                      <p className="title-box">Tacos</p>     
                    </div>
                  </div>

                  <div className="img-four box">
                    <img  src="/designImages/tortasPastor.avif" alt="Torta pastor" />
                    <div className="shadow ">
                      <p className="title-box">Tortas</p>     
                    </div>
                  </div>
                 
                </div>

                <div className="block-two blocks">
                  
                  <div className="img-one-two box">
                    <img src="/designImages/micheladas.avif" alt="micheladas imagenes" />

                    <div className="shadow ">
                      <p className="title-box">Micheladas</p>     
                    </div>
                  </div>

                  <div className="img-two-two box">
                    <img src="/designImages/frappeOreo.avif" alt="Imagen frappe" />
                    <div className="shadow ">
                      <p className="title-box">Frappe's</p>     
                    </div>
                  </div>

                  <div className="box">
                    <img src="/designImages/bebidasImagenes.avif" alt="imagen bebidas" />
                    <div className="shadow ">
                      <p className="title-box">Drinks</p>     
                    </div>
                  </div>
                 
                </div>

            </div>


          </div>

        </section>

        <section className="form ">
          <div className="contain">
            <p className="title-section">Contactanos</p>

            <div className="contain-contact">

              <div className="side-left">

                <div className="parraf-adress">
                  <p className="adress">Estamos ubicados en la av. Independencia, en la localidad de Laguna de Lagarto. Frente al jardin de niños, Jose Mariano Monterde. Abrimos de viernes a domingo, de 4pm a 12 de la noche.</p>
                  <p className="numbers">Contactanos al whatsapp
                    2881231679
                    2881894958
                    </p>                  
                </div>

              </div>
              <div className="side-right">
                <form action="" className="form-contact">
                  <div className="camp-adjust">
                    <input type="text" placeholder="Nombre" />
                    <input type="number" placeholder="Telefono" />
                  </div>
                  <input type="email" placeholder="Email" />
                  <textarea  placeholder="mensaje"></textarea>
                  <input type="submit" value='Enviar' />
                </form>
              </div>
            </div>

          </div>
        </section>
    </>
  )
}
