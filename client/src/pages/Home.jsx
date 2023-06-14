import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Ajude a encontrar um lar! Adote um cachorro hoje!",
      desc: "A ONG Patinhas Felizes está em busca de lares amorosos para seus cãezinhos adoráveis. Nossos cachorros resgatados estão ansiosos para encontrar famílias dedicadas e carinhosas. Se você está procurando um companheiro leal e peludo, venha nos visitar! Temos uma variedade de raças e tamanhos, desde filhotes brincalhões até cães adultos calmos. Todos eles são vacinados, castrados e saudáveis.",
      img: "https://img.freepik.com/fotos-gratis/close-de-um-cachorro-fofo-em-um-fundo-azul_181624-25204.jpg?w=826&t=st=1686700913~exp=1686701513~hmac=bfc157b821a64ac5a7cb6dbbcb2449f78ed747b4ea88d00ae1a2203fe8317261",
    },
    {
      id: 2,
      title: "Ajude a encontrar um lar! Adote um cachorro hoje!",
      desc: "A ONG Patinhas Felizes está em busca de lares amorosos para seus cãezinhos adoráveis. Nossos cachorros resgatados estão ansiosos para encontrar famílias dedicadas e carinhosas. Se você está procurando um companheiro leal e peludo, venha nos visitar! Temos uma variedade de raças e tamanhos, desde filhotes brincalhões até cães adultos calmos. Todos eles são vacinados, castrados e saudáveis.",
      img: "https://img.freepik.com/fotos-gratis/cachorro-pequeno-sendo-adoravel-em-um-estudio_23-2149016885.jpg?w=826&t=st=1686700858~exp=1686701458~hmac=b5ba022d57f3f9e8c4bb8348f41ba8abffa25ccb223236279a39f8cb9670e2b8",
    },
    {
      id: 3,
      title: "Ajude a encontrar um lar! Adote um cachorro hoje!",
      desc: "A ONG Patinhas Felizes está em busca de lares amorosos para seus cãezinhos adoráveis. Nossos cachorros resgatados estão ansiosos para encontrar famílias dedicadas e carinhosas. Se você está procurando um companheiro leal e peludo, venha nos visitar! Temos uma variedade de raças e tamanhos, desde filhotes brincalhões até cães adultos calmos. Todos eles são vacinados, castrados e saudáveis.",
      img: "https://img.freepik.com/fotos-gratis/foto-vertical-de-um-curioso-jack-russell-terrier_181624-46001.jpg?w=826&t=st=1686700883~exp=1686701483~hmac=a2fab9d0bd2e518150536a2f8c30e1a56290b19332e4de5a860d0dde88686d09",
    },
    {
      id: 4,
      title: "Ajude a encontrar um lar! Adote um cachorro hoje!",
      desc: "A ONG Patinhas Felizes está em busca de lares amorosos para seus cãezinhos adoráveis. Nossos cachorros resgatados estão ansiosos para encontrar famílias dedicadas e carinhosas. Se você está procurando um companheiro leal e peludo, venha nos visitar! Temos uma variedade de raças e tamanhos, desde filhotes brincalhões até cães adultos calmos. Todos eles são vacinados, castrados e saudáveis.",
      img: "https://img.freepik.com/fotos-gratis/retrato-de-cachorro-adoravel-olhando-para-cima_23-2148366909.jpg?w=900&t=st=1686700818~exp=1686701418~hmac=d0cd4db2f5f58acc39c5e822fe691e82f86c8093066981b1f637a42735006f15",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Ler mais</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
