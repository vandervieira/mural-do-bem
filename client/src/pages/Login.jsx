import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      console.log("Caiu aqui")
      setError(err.response.data);
    }
  };
  return (
    <div className="auth">
      <img src={Logo} alt="logo" />

      <form>
        <h1>Entrar</h1>
        <input type="text" placeholder="username" name="username" onChange={handleChange} />
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit} className="authBtn">
          Entrar
        </button>
        {err && <p>{err}</p>}
        <span>
          Não tem uma conta? <Link to="/register" className="navButton">Cadastre-se</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
