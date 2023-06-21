import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
  });

  const [file, setFile] = useState(null);

  const [err, setError] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData, { withCredentials: true });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    inputs.img = imgUrl ? "/public/upload/" + imgUrl : "/public/upload/default.png";
    try {
      await axios.post("/auth/register", inputs);
      navigate('/login')

    } catch (err) {
      setError(err.response.data);
    }
  };


  return (
    <div className="auth">
      <h1>Cadastrar-se</h1>
      <form>
        <input required type="text" placeholder="username" name="username" onChange={handleChange} />
        <input required type="email" placeholder="email" name="email" onChange={handleChange} />
        <input required type="password" placeholder="password" name="password" onChange={handleChange} />
        <label className="file" htmlFor="file">Foto de perfil</label>
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          name=""
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button onClick={handleSubmit} className="authBtn">
          Cadastrar-se
        </button>
        {err && <p>{err}</p>}
        <span>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
