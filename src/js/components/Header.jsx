import banner from "../../img/Header.jpg";
const Header = () => {
  return (
    <header       style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "250px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>Tenemos las mejores pizzas que podrás encontrar 🍕</p>
    </header>
  );
};

export default Header;