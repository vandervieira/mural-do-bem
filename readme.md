# Mural do Bem
Um portal para reunir ONGs e voluntários que defendem a causa animal. Na plataforma, as ONGs podem divulgar animais para adoção, além de compartilhar suas necessidades por categorias (ração, medicamentos, materiais de limpeza) com outras ONGs que podem cooperar. Os voluntários também podem se informar sobre quando e qual tipo de ajuda as instituições precisam.

O Mural do Bem visa conectar ONGs que precisam de ajuda e pessoas físicas dispostas a ajudar. O objetivo principal do mural do bem é um ambiente de fácil acesso, divulgação e propagação da informação. Conectando quem precisa de ajuda com quem está disposto a ajudar.

# Projeto para estudos
Este projeto de Portal Web está sendo desenvolvido para a disciplina de **Projeto Integrador: Portal Web**, referente ao curso de **Sitemas Para Internet - UNISINOS.**
O projeto `ainda está em seu desenvolvimento`.
Porém, este Portal Web pode ser acessado agora para ter uma prévia através deste link: [Mural do Bem](http://mural-do-bem.vandervieira.com.br)

### Rotas/Telas atualmente criadas
`/` Inicial Home

`/login` Para autenticar-se e possibilitar criar posts.

`/register` Para se cadastrar

`/?cat=categoria` Para filtrar os posts no mural de acordo com o nome da cateogira

`/post/:id` Para acessar a pagina de um post especifico 

`/write` Para criar um novo post


## Tecnologias / Frameworks
* React 

* Vite

* NodeJS

* MySQL

* Docker

## Setup

Para subir o portal em sua máquina, você precisa ter o docker-compose instalado.
Após clonar o projeto, diretório raiz da aplicação, execute
```
docker-compose up -d
```

Com isto o docker-compose irá subir trê containers:
* API
Container relacionado a aplicação NodeJS, que irá servir a API de backend do Mural do Bem.

* CLIENT
Container relacionado a aplicação React, que irá servir o frontend do Mural do Bem.

* DB
Container relacionado ao database MySQL MariaDB, que irá servir o banco de dados do Mural do Bem.

Por fim, no seu terminal será exibido um endereço `http://localhost:5173/` com a porta gerada. Acesse este endereço para abrir o Portal Mural do Bem na sua máquina.

Lembrando que atualmente há uma versão buildada e em "produção" para testar, link: [Mural do Bem](http://mural-do-bem.vandervieira.com.br)