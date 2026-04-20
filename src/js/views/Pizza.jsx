import { useState, useEffect } from "react";

const Pizza = ({ pizzaId }) => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener pizza:", error);
      }
    };

    getPizza();
  }, [pizzaId]);

  if (!pizza) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={pizza.img} alt={pizza.name} width="300" />

      <h2>{pizza.name}</h2>

      <p>{pizza.desc}</p>

      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>🍕 {ing}</li>
        ))}
      </ul>

      <p><strong>${pizza.price.toLocaleString()}</strong></p>

      <button>Añadir 🛒</button>
    </div>
  );
};

export default Pizza;