import { Navigate, Route, Routes } from "react-router-dom"
import { Footer } from "../../ui/Footer"
import { NavBar } from "../../ui/NavBar"
import { Bebidas, Carrito, Snacks } from "../pages"
import { Inicio } from "../pages/Inicio"




export const ArticlesRoute = () => {
  return (
    <>
      <NavBar/>
        <div>
          <Routes>
              <Route path="inicio" element={<Inicio/>}/>
              <Route path="snacks" element={<Snacks/>}/>
              <Route path="bebidas" element={<Bebidas/>}/>
              <Route path="carrito" element={<Carrito/>}/>
              <Route path="/" element={<Navigate to="/inicio"/>}/>
          </Routes>

        </div>


      <Footer/>
    </>
  )
}


