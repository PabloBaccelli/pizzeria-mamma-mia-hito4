import { useState } from "react";
import Navbar from "./js/components/Navbar";
import Home from "./js/views/Home";
import LoginPage from "./js/views/LoginPage";
import RegisterPage from "./js/views/RegisterPage";
import Footer from "./js/components/Footer";
import Cart from "./js/views/Cart";
import Pizza from "./js/views/Pizza";

function App() {
  const [vista, setVista] = useState("home");
  const [pizzaId, setPizzaId] = useState("p001");

  return (
    <>
      <Navbar setVista={setVista} />

      {vista === "home" && (
        <Home setVista={setVista} setPizzaId={setPizzaId} />
      )}

      {vista === "login" && <LoginPage />}
      {vista === "register" && <RegisterPage />}
      {vista === "cart" && <Cart />}
      
      {vista === "pizza" && <Pizza pizzaId={pizzaId} />}

      <Footer />
    </>
  );
}

export default App;