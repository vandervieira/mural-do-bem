import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link className="linkHome" to="/">
          <div className="logo">
            <img src={Logo} alt="logo" />
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
            <b>Vander Vieira</b>
          </span>
          <span>Sair</span>
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
