import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`, { withCredentials: true });
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat])


  return (
    <div className="menu">
      <h1>Outros posts sugeridos</h1>
      {posts.map((post) => (
        <div className="post">
          <img src={`../upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Ler mais</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
