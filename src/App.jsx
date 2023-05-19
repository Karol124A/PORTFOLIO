import './App.css';
import Menu from './components/pages/Menu';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Projetos from './components/pages/Projetos';
import Cursos from './components/pages/Cursos';
import { BrowserRouter as Navegador, Routes, Route } from 'react-router-dom';
import TelaDoProjeto from './components/pages/TelaDoProjeto';
import html from './images/html.svg'
import css from './images/css.svg'
import php from './images/php.svg'
import csharp from './images/csharp.svg'
import paint from './images/paint.svg'
import vs from './images/vs.svg'
import gimp from './images/gimp.svg'
import netflixInicio from './images/netflix-inicio.png'
import turismoInicio from './images/turismo-inicio.png'
import locacaoInicio from './images/locacao-inicio.png'
import confeitariaInicio from './images/confeitaria-inicio.png'
import dadosPaisesInicio from './images/dadosPaises-inicio.png'
import nomeInicio from './images/nome-inicio.png'
import conviteInicio from './images/convite-inicio.png'
import netflixPage1 from './images/netflix-pag1.png'
import netflixPage2 from './images/netflix-pag2.png'
import netflixPage3 from './images/netflix-pag3.png'
import netflixPage4 from './images/netflix-pag4.png'
import turismoPage1 from './images/turismo-pag1.png'
import turismoPage2 from './images/turismo-pag2.png'
import turismoPage3 from './images/turismo-pag3.png'
import turismoPage4 from './images/turismo-pag4.png'
import locadoraPage1 from './images/locadora-pag1.png'
import locadoraPage2 from './images/locadora-pag2.png'
import locadoraPage3 from './images/locadora-pag3.png'
import locadoraPage4 from './images/locadora-pag4.png'
import confeitariaPage1 from './images/confeitaria-pag1.png'
import confeitariaPage2 from './images/confeitaria-pag2.png'
import confeitariaPage3 from './images/confeitaria-pag3.png'
import confeitariaPage4 from './images/confeitaria-pag4.png'
import dadosPaisesPage1 from './images/dadosPaises-pag1.png'
import dadosPaisesPage2 from './images/dadosPaises-pag2.png'
import dadosPaisesPage3 from './images/dadosPaises-pag3.png'
import dadosPaisesPage4 from './images/dadosPaises-pag4.png'
import nomePage1 from './images/nome-pag1.png'
import nomePage2 from './images/nome-pag2.png'
import nomePage3 from './images/nome-pag3.png'
import nomePage4 from './images/nome-pag4.png'
import convitePage1 from './images/convite-pag1.png'
import convitePage2 from './images/convite-pag2.png'
import convitePage3 from './images/convite-pag3.png'
import convitePage4 from './images/convite-pag4.png'



function App() {

  function pageNet() {
    window.open("https://github.com/Karol124A/netflix", "_blank");
  }

  function pageTurismo() {
    window.open("https://github.com/Karol124A/turismo", "_blank");
  }

  function pageConfeitaria() {
    window.open("https://github.com/Karol124A/cursos-confeitaria", "_blank");
  }

  function pagePaises() {
    window.open("https://github.com/Karol124A/paises", "_blank");
  }

  function pageLocacao() {
    window.open("https://github.com/Karol124A/sistema-locacao", "_blank");
  }

  function downloadConvite() {
    const fileUrl = 'src/images/convite-pag1.png';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function downloadIdentidade() {
    const fileUrl = 'src/images/id-visual-pag-projeto.png';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <>
      <Navegador>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/cursos" element={<Cursos />} />

          <Route path="/telaProjetoNetflix" element={<TelaDoProjeto
            descricao="Este projeto consiste em um site sobre a Netflix. Possui a história, curiosidades e funcionamento desta plataforma tão utilizada ao longos dos tempos."
            img1={html} img2={css} imagem={netflixInicio} imagem1={netflixPage1}
            imagem2={netflixPage2} imagem3={netflixPage3} imagem4={netflixPage4} click={pageNet} nameButton="VER NO GIT"
          />} />

          <Route path="/telaProjetoTurismo" element={<TelaDoProjeto
            descricao="Neste projeto trabalhei com o posicionamento de elementos em uma página. Para tanto, criei um site com imagens de lugares super interessantes para visitar e conhecer."
            img1={html} img2={css} imagem={turismoInicio} imagem1={turismoPage1}
            imagem2={turismoPage2} imagem3={turismoPage3} imagem4={turismoPage4} click={pageTurismo} nameButton="VER NO GIT"
          />} /> 

          <Route path="/telaProjetoLocacao" element={<TelaDoProjeto
            descricao="4Wheels, é um sistema para uma locadora de carros. Nele é possível realizar o cadastro dos automóveis, serviços e locações, sendo possível atualizar dados e até mesmo excluí-los (CRUD). Realizei este projeto em equipe durante 1 mês."
            img1={csharp} img2={vs} imagem={locacaoInicio} imagem1={locadoraPage1}
            imagem2={locadoraPage2} imagem3={locadoraPage3} imagem4={locadoraPage4} click={pageLocacao} nameButton="VER NO GIT"
          />} />

          <Route path="/telaProjetoConfeitaria" element={<TelaDoProjeto
            descricao="Este site foi criado para um cenário fictício de uma confeitaria, que fornecia cursos voltados à área. O intuito desta plataforma, era trabalhar com o Bootsrap e CSS" img1={html} img2={css} imagem={confeitariaInicio} imagem1={confeitariaPage1}
            imagem2={confeitariaPage2} imagem3={confeitariaPage3} imagem4={confeitariaPage4} click={pageConfeitaria} nameButton="VER NO GIT"
          />} />

          <Route path="/telaProjetoDadosPaises" element={<TelaDoProjeto
            descricao="Consiste em um site sobre diversos dados de vários países do mundo. Trabalhei com uma API para o fornecimento desses dados e utilizei PHP para aplicá-los."
            img1={html} img2={php} imagem={dadosPaisesInicio} imagem1={dadosPaisesPage1}
            imagem2={dadosPaisesPage2} imagem3={dadosPaisesPage3} imagem4={dadosPaisesPage4} click={pagePaises} nameButton="VER NO GIT"
          />} />

          <Route path="/telaProjetoNome" element={<TelaDoProjeto
            descricao="Desenvolvi um design com meu nome, para trabalhar com camadas, fontes e identidade. Realizei este projeto para compreender o significado e a mensagem que os tipos de fontes proporcionam."
            img1={gimp} img2={paint} imagem={nomeInicio} imagem1={nomePage1}
            imagem2={nomePage2} imagem3={nomePage3} imagem4={nomePage4}  nameButton="VER O PROJETO" click={downloadIdentidade}
          />} />

          <Route path="/telaProjetoConvite" element={<TelaDoProjeto
            descricao="Criei uma arte digital para uma aniversariante de 15 anos. Para tanto, utilizei a ferramenta de camadas do GIMP, para realizar um convite interessante e completo de elementos."
            img1={gimp}  img2={paint} imagem={conviteInicio} imagem1={convitePage1}
            imagem2={convitePage2} imagem3={convitePage3} imagem4={convitePage4} click={downloadConvite} nameButton="VER O PROJETO"
          />} />
 
        </Routes>

      </Navegador>



    </>
  )
}

export default App
