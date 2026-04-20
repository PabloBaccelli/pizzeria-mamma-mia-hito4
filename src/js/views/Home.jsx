import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import "../../styles/home.css";

const Home = ({ setVista, setPizzaId }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener pizzas:", error);
      }
    };

    getPizzas();
  }, []);

  return (
    <div>
      <Header />
      <div className="pizzas-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            setVista={setVista}
            setPizzaId={setPizzaId}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;