import axios from "axios";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  const location = useLocation();
  const postId = location.pathname.split("/")[2];

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

  const limitText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };


  return (
    <div className="menu">
      <h1>Outros posts sugeridos</h1>
      {posts.map((post) => post.id != postId && (
        <div className="post">
          <img src={`../${post?.img}`} alt="" />
          <h2>{limitText(post.title, 50)}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(limitText(post.desc, 100)),
            }}
          ></p>
          <Link className="link" to={`/post/${post.id}`}>
            <button>Ler mais</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
