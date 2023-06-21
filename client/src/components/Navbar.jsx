import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <Link className="linkHome" to="/">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
        </Link>
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
          <span>
            <b>{currentUser?.username}</b>
          </span>
          {currentUser ? (
            <span onClick={logout}>Sair</span>
          ) : (
            <Link className="link" to="/login">
              Login
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
