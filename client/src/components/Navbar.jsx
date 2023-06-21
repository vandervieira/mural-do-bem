import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=adote">
            <h6>ADOTE</h6>
          </Link>
          <Link className="link" to="/?cat=racao">
            <h6>RAÇÃO</h6>
          </Link>
          <Link className="link" to="/?cat=medicamentos">
            <h6>MEDICAMENTOS</h6>
          </Link>
          <Link className="link" to="/?cat=materiaisdelimpeza">
            <h6>MATERIAIS DE LIMPEZA</h6>
          </Link>
        </div>
        <div className="right-section">
          {currentUser && (
            <span>
              <b>{currentUser.username}</b>
            </span>
          )}
          {currentUser ? (
            <Link onClick={logout} className="link">Sair</Link>
          ) : (
            <Link className="link" to="/login">
              Entrar
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Postar
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
