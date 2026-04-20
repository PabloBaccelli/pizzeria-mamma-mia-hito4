import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDACIONES
    if (!email || !password || !confirmPassword) {
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      setMensaje("El password debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      setMensaje("Los passwords no coinciden");
      return;
    }

    // ÉXITO
    setMensaje("Registro exitoso ✅");
  };

  return (
    <div>
      <h2>Registro</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Registrarse</button>
      </form>

      <p>{mensaje}</p>
    </div>
  );
};

export default RegisterPage;