import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Título" />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publicar</h1>
          <span>
            <b>Status: </b> Rascunho
          </span>
          <span>
            <b>Visibilidade: </b> Publica
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label className="file" htmlFor="file">Upload de Imagem</label>
          <div className="buttons">
            <button>Salvar rascunho</button>
            <button>Atualizar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoria</h1>
          <div className="cat">
          <input type="radio" name="cat" value="adote" id="adote" />
          <label htmlFor="adote">Adote</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="racao" id="racao" />
          <label htmlFor="racao">Ração</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="medicamentos" id="medicamentos" />
          <label htmlFor="medicamentos">Medicamentos</label>
          </div>
          <div className="cat"> 
          <input type="radio" name="cat" value="materiaisdelimpeza" id="materiaisdelimpeza" />
          <label htmlFor="materiaisdelimpeza">Materiais de limpeza</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
