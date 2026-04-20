import "../../styles/navbar.css";

const Navbar = ({ setVista }) => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar">
      {/* IZQUIERDA */}
      <div className="nav-left">
        <h2>Pizzería Mamma Mia</h2>
        <button onClick={() => setVista("home")}>🍕 Home</button>

        {token ? (
          <>
            <button>🔓 Profile</button>
            <button>🔒 Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => setVista("login")}>🔐 Login</button>
            <button onClick={() => setVista("register")}>🔐 Register</button>
          </>
        )}
      </div>



      {/* DERECHA */}
      <div className="nav-right">
        <button>🛒 Total: ${total.toLocaleString()}</button>
      </div>
    </nav>
  );
};

export default Navbar;