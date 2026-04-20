import "../../styles/card.css";

const CardPizza = ({ id, name, price, ingredients, img, setVista, setPizzaId }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />

      <h2>{name}</h2>

      <ul>
        {ingredients.map((ing, index) => (
          <li key={index}>🍕 {ing}</li>
        ))}
      </ul>

      <p>${price.toLocaleString()}</p>

      <button onClick={() => {
        setPizzaId(id);
        setVista("pizza");
      }}>
        Ver más
      </button>

      <button>Añadir</button>
    </div>
  );
};

export default CardPizza;