import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../img/logo.png";

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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

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
    inputs.img = imgUrl ? "public/upload/" + imgUrl : "/public/defaults/avatar.jpg";
    try {
      await axios.post("/auth/register", inputs);
      navigate('/login')

    } catch (err) {
      setError(err.response.data);
    }
  };


  return (
    <div className="auth">
      <img src={Logo} alt="logo" />
        
      <form>
      <h1>Cadastrar-se</h1>
        <label className={`upload-button ${file ? "file-selected" : ""}`} htmlFor="file">+</label>
        <input required type="text" placeholder="username" name="username" onChange={handleChange} />
        <input required type="email" placeholder="email" name="email" onChange={handleChange} />
        <input required type="password" placeholder="password" name="password" onChange={handleChange} />
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
        />
        <button onClick={handleSubmit} className="authBtn">
          Cadastrar-se
        </button>
        {err && <p>{err}</p>}
        <span>
          Já tem uma conta? <Link to="/login" className="navButton">Entrar</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
