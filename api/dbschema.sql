-- phpMyAdmin SQL Dump
-- version 4.3.7
-- http://www.phpmyadmin.net
--
-- Host: 
-- Tempo de geração: 21/06/2023 às 17:11
-- Versão do servidor: 10.2.36-MariaDB-log
-- Versão do PHP: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `databasename`
--
CREATE DATABASE IF NOT EXISTS `databasename` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `databasename`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `desc` longtext NOT NULL,
  `img` varchar(255) NOT NULL,
  `date` datetime DEFAULT NULL,
  `uid` int(11) NOT NULL,
  `cat` varchar(45) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `posts`
--

INSERT INTO `posts` (`id`, `title`, `desc`, `img`, `date`, `uid`, `cat`) VALUES
(1, 'Adote agora o seu pet! Estamos comportando 3 a mais na nossa ONG', '<p>Adote agora o seu pet e faça a diferença! Estamos felizes em informar que a nossa ONG está abrindo as portas para receber mais três adoráveis animaizinhos em busca de um lar amoroso. Se você está procurando um companheiro leal e cheio de amor para compartilhar momentos incríveis, essa é a sua chance! Nossos pets são cuidados com todo o carinho e estão ansiosos para alegrar a sua vida. Venha conhecer os cãezinhos e gatinhos encantadores que temos disponíveis para adoção. Cada um deles possui sua própria personalidade e características especiais, prontos para conquistar o seu coração. Ao adotar um pet, você estará dando a ele uma nova chance e proporcionando um lar seguro e cheio de amor. Afinal, não há sensação mais gratificante do que fazer parte da jornada de transformação de um animalzinho abandonado. Venha até a nossa ONG, conheça nossos peludos e encontre o seu novo melhor amigo hoje mesmo. Juntos, podemos fazer a diferença!</p><p><br></p><p>Nossos animais resgatados estão ansiosos para encontrar um lar onde possam ser amados e cuidados. Ao adotar um pet da nossa ONG, você estará proporcionando uma segunda chance a um ser indefeso. Cada um deles tem sua própria história e está em busca de um final feliz. Não perca a oportunidade de trazer alegria e companheirismo para a sua vida, enquanto faz a diferença na vida de um animalzinho.</p><p><br></p><p>Na nossa ONG, priorizamos o bem-estar dos nossos pets. Antes de serem disponibilizados para adoção, eles passam por cuidados veterinários, são vacinados, castrados e recebem todo o carinho necessário para se recuperarem de eventuais traumas do passado. Ao adotar um pet conosco, você terá a garantia de estar levando para casa um animal saudável e pronto para ser parte da sua família.</p><p><br></p><p>Além de adotar, você também pode contribuir de outras formas para o nosso trabalho. Se você não pode adotar um pet no momento, considere fazer uma doação para nos ajudar a cuidar dos animais e oferecer-lhes todo o suporte necessário. Seja uma doação financeira, de ração, medicamentos ou materiais de limpeza, toda ajuda é bem-vinda e faz uma grande diferença. Juntos, podemos construir um mundo melhor para os animais e promover a conscientização sobre a importância da adoção responsável. Faça parte dessa causa e seja o herói na vida de um pet necessitado!</p>', 'adote.jpg', '2023-06-21 14:57:05', 1, 'adote'),
(2, 'Precisamos de materiais de limpeza na nossa ONG 4 patas', '<p>Precisamos de materiais de limpeza na nossa ONG 4 patas. A limpeza é essencial para manter um ambiente saudável e acolhedor para os nossos queridos animais. Com a sua ajuda, podemos garantir que cada canto da nossa ONG esteja impecável e proporcione o máximo de conforto aos nossos peludos.</p><p><br></p><p>Desde a chegada dos animais até a sua adoção, é fundamental manter a higiene em dia. Os materiais de limpeza são utilizados para a desinfecção das áreas, lavagem de roupas e utensílios, além da limpeza dos banheiros e espaços comuns. Com o aumento da demanda e o crescimento do número de animais acolhidos, a necessidade por esses materiais também aumentou.</p><p><br></p><p>Entre os materiais de limpeza que mais utilizamos, destacam-se os desinfetantes de alta qualidade, que garantem a eliminação de germes e bactérias. Além disso, os produtos de limpeza para pisos e superfícies são indispensáveis para manter os ambientes livres de sujeira e odores desagradáveis. Também precisamos de detergentes, sabões, água sanitária, vassouras, rodos, panos de limpeza e sacos de lixo.</p><p><br></p><p>Ao doar materiais de limpeza para a nossa ONG, você está contribuindo diretamente para o bem-estar dos animais. Cada produto doado faz a diferença e nos ajuda a proporcionar um ambiente limpo e saudável para os nossos amiguinhos de quatro patas. Sua colaboração é essencial para mantermos nossas instalações em perfeitas condições e continuar oferecendo cuidado e amor aos animais resgatados.</p><p><br></p><p>Faça parte dessa corrente do bem e ajude-nos a suprir essa necessidade. Sua doação de materiais de limpeza é valiosa e fará com que possamos destinar recursos para outras áreas importantes, como alimentação, cuidados veterinários e campanhas de adoção. Contamos com você para que juntos possamos proporcionar um ambiente limpo e seguro para os nossos amados animais.</p><p>Contamos com a sua solidariedade e generosidade para manter a nossa ONG 4 patas sempre limpa e acolhedora. Junte-se a nós nessa causa e faça a diferença na vida dos animais que dependem do nosso cuidado e proteção. Agradecemos de todo o coração pelo apoio!</p>', 'materiaisdelimpeza.jpg', '2023-06-21 15:02:07', 2, 'materiaisdelimpeza'),
(3, 'Estamos aceitando todo tipo de ração na nossa ONG', '<p>Estamos aceitando todo tipo de ração na nossa ONG. Nossos queridos animais dependem de uma alimentação adequada para garantir sua saúde e bem-estar. Com a sua ajuda, podemos oferecer uma dieta balanceada e nutritiva a cada um deles, suprindo suas necessidades e proporcionando uma vida mais feliz.</p><p>A variedade de rações disponíveis no mercado é imensa, e cada uma delas oferece nutrientes específicos para atender às demandas dos diferentes tipos de animais. Desde rações para cães de porte pequeno até rações para gatos idosos, todas são bem-vindas em nossa ONG. Aceitamos também rações especiais, como as indicadas para animais com necessidades alimentares específicas, como problemas de saúde ou restrições alimentares.</p><p><br></p><p>A doação de ração é de extrema importância para nós, pois nos ajuda a suprir as necessidades alimentares diárias dos animais acolhidos. Cada pacote de ração doado representa uma refeição garantida para um animal que depende do nosso cuidado. Além disso, as doações nos permitem direcionar recursos para outras áreas importantes, como cuidados veterinários, esterilizações e campanhas de conscientização.</p><p><br></p><p>Para garantir a qualidade das rações recebidas, pedimos que as embalagens estejam lacradas e dentro do prazo de validade. Se possível, também é importante verificar se a ração é indicada para a faixa etária do animal que será beneficiado. Ressaltamos que qualquer quantidade de ração é bem recebida e fará a diferença na vida dos nossos animais resgatados.</p><p><br></p><p>Ao contribuir com a doação de ração, você está fazendo parte de uma corrente do bem que busca proporcionar uma vida digna e saudável para os animais. Sua generosidade e solidariedade são fundamentais para o funcionamento da nossa ONG. Agradecemos de todo o coração pelo seu apoio e por se juntar a nós nessa missão de cuidar e proteger aqueles que não podem se defender.</p><p>Contamos com a sua colaboração para garantir que cada animal acolhido em nossa ONG receba a alimentação adequada e necessária para sua sobrevivência. Sua doação de ração fará toda a diferença na vida desses animais, proporcionando-lhes o sustento e a nutrição necessários. Juntos, podemos transformar a realidade desses seres tão especiais. Agradecemos profundamente pela sua ajuda e dedicação!</p>', 'racao.jpg', '2023-06-21 15:08:12', 3, 'racao'),
(4, 'Precisamos de medicamentos para nossos pets', '<p>Precisamos de medicamentos para nossos pets. A saúde dos animais que acolhemos é uma prioridade em nossa ONG, e para isso contamos com a colaboração de pessoas como você, que entendem a importância de garantir o bem-estar desses seres tão especiais.</p><p>Os medicamentos desempenham um papel crucial no tratamento e prevenção de doenças nos animais. Desde vermífugos e antipulgas até medicamentos para o controle de doenças crônicas, cada tipo de medicamento contribui para a saúde e qualidade de vida dos nossos pets. Com sua ajuda, poderemos oferecer os cuidados necessários e garantir que eles tenham acesso aos medicamentos adequados.</p><p>A doação de medicamentos é essencial para suprir as necessidades diárias dos animais acolhidos em nossa ONG. Cada doação significa que poderemos fornecer o tratamento necessário, aliviar sintomas desconfortáveis e promover a recuperação de animais doentes ou lesionados. Além disso, as doações nos permitem direcionar recursos para outras áreas essenciais, como cuidados veterinários, esterilizações e campanhas de adoção responsável.</p><p>Para garantir a segurança e eficácia dos medicamentos doados, solicitamos que estejam dentro do prazo de validade e em embalagens originais lacradas. É importante lembrar que alguns medicamentos requerem prescrição veterinária e, nesses casos, pedimos que a doação seja feita mediante orientação profissional. Ressaltamos que qualquer quantidade de medicamentos é valiosa e fará a diferença na vida dos nossos pets.</p><p>Ao contribuir com a doação de medicamentos, você está desempenhando um papel fundamental na recuperação e bem-estar dos animais em nossa ONG. Sua generosidade e solidariedade estão proporcionando uma chance de cura e uma vida mais saudável para esses pets que tanto precisam. Agradecemos imensamente pelo seu apoio e por se unir a nós nessa missão de cuidar e proteger aqueles que não podem cuidar de si mesmos.</p><p>Contamos com sua ajuda para garantir que cada animal acolhido em nossa ONG tenha acesso aos medicamentos necessários para sua saúde e recuperação. Sua doação fará toda a diferença, proporcionando alívio de sintomas, tratamento adequado e uma nova chance de vida para esses pets. Agradecemos de coração pela sua colaboração e dedicação em fazer a diferença na vida dos nossos animais. Juntos, podemos transformar a realidade e oferecer um futuro melhor para eles.</p>', 'medicamentos.jpg', '2023-06-21 15:10:49', 4, 'medicamentos');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `img`) VALUES
(1, 'Primeiro Usuario', 'primeiro@usuario.com', '$2a$10$ttVx7JTejoGblFnlIVPRcuaZG80UQdwlkttxdGU0YPF6MWI0iU.02', '/public/upload/avatar.jpg'),
(2, 'Segundo Usuario', 'segundo@usuario.com', '$2a$10$TpoMJn.dKnt.ghSBSkMbu.chsciXY3HL.YOrj1i7rVVFVhxfDOFNe', '/public/upload/avatar.jpg'),
(3, 'Terceiro Usuario', 'terceiro@usuario.com', '$2a$10$Me9ubcmcajJmxaVfHNSpqe.1iJJVn4zbhBS/3EiCzkzkxdfGg.tnK', '/public/upload/avatar.jpg'),
(4, 'Quarto Usuario', 'quarto@usuario.com', '$2a$10$Ggj9aKv/7TYalZynu2FNue/Z2/yNvCC05UGyqPbHwiI3MMENtipgq', '/public/upload/avatar.jpg');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`), ADD KEY `uid_idx` (`uid`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `posts`
--
ALTER TABLE `posts`
ADD CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
