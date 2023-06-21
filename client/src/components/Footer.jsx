import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Projeto desenvolvido para a disciplina:
        <br />Projeto Integrador <b>Portal Web</b>.
      </span>
    </footer>
  );
};

export default Footer;
