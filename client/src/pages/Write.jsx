import axios from "axios";
import moment from "moment";
import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

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

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = null;
  
    if (file) {
      imgUrl = await upload();
    }
  
    try {
      const postData = {
        title,
        desc: value,
        cat,
        img: file ? "public/upload/" + imgUrl : state?.img || "public/defaults/post.jpg",
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      };
  
      const url = state ? `/posts/${state.id}` : "/posts/";
  
      await axios({
        method: state ? "put" : "post",
        url,
        data: postData,
        withCredentials: true,
      });
  
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
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
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">Upload de Imagem</label>
          <div className="buttons">
            {/* <button>Salvar rascunho</button> */}
            <button onClick={handleClick}>Publicar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoria</h1>
          <div className="cat">
            <input type="radio" checked={cat === "adote"} name="cat" value="adote" id="adote" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="adote">Adote</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "racao"} name="cat" value="racao" id="racao" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="racao">Ração</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "medicamentos"} name="cat" value="medicamentos" id="medicamentos" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="medicamentos">Medicamentos</label>
          </div>
          <div className="cat">
            <input type="radio" checked={cat === "materiaisdelimpeza"} name="cat" value="materiaisdelimpeza" id="materiaisdelimpeza" onChange={(e) => setCat(e.target.value)} />
            <label htmlFor="materiaisdelimpeza">Materiais de limpeza</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
