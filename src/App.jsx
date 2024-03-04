import { Route, Routes } from "react-router-dom"
import Control from "./pages/control"
import Registro from "./pages/registro"
import Reporte from "./pages/reporte"
import cabeza from './img/cabeza.png'

function App() {
  return (
    <div className="bg-logo pb-5">
      <div className="container px-0 bg-light shadow" >
        <img src={cabeza} width={'100%'} alt="" />
        <Routes>
          <Route path="/" element={<Registro />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/control" element={<Control />} />
          <Route path="/reporte" element={<Reporte />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
