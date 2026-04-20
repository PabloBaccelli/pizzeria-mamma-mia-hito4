import { useState } from "react";
import { pizzaCart } from "../data/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // aumentar
  const aumentar = (id) => {
    const nuevoCart = cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    );
    setCart(nuevoCart);
  };

  // disminuir
  const disminuir = (id) => {
    const nuevoCart = cart
      .map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
      .filter((pizza) => pizza.count > 0);

    setCart(nuevoCart);
  };

  // total
  const total = cart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
    <div>
      <h2>Carrito 🛒</h2>

      {cart.map((pizza) => (
        <div key={pizza.id}>
          <img src={pizza.img} width="100" />
          <p>{pizza.name}</p>
          <p>${pizza.price.toLocaleString()}</p>

          <button onClick={() => disminuir(pizza.id)}>-</button>
          <span>{pizza.count}</span>
          <button onClick={() => aumentar(pizza.id)}>+</button>
        </div>
      ))}

      <h3>Total: ${total.toLocaleString()}</h3>

      <button>Pagar 💳</button>
    </div>
  );
};

export default Cart;