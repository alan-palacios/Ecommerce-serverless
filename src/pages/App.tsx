import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AgregarArticulo from "./AgregarArticulo";
import Carrito from "./Carrito";
import ComprarArticulo from "./ComprarArticulo";
import DetalleArticulo from "./DetalleArticulo";
import Home from "./Home";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-background relative">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/Ecommerce-serverless" element={<Home/>} />
          <Route path="/Ecommerce-serverless/agregar-articulo" element={<AgregarArticulo/>} />
          <Route path="/Ecommerce-serverless/:id" element={<DetalleArticulo/>} />
          <Route path="/Ecommerce-serverless/comprar" element={<ComprarArticulo/>} />
          <Route path="/Ecommerce-serverless/carrito" element={<Carrito/>} />
        </Routes>
      </HashRouter>
      <Footer /> 
    </div>
  );
}

export default App;
