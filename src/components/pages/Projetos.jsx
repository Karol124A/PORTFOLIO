import React from 'react'
import github from '../../images/github.svg'
import insta from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import style from './layouts/Projetos.module.css'
import netflix from '../../images/netflix-pag-projeto.png'
import turismo from '../../images/turismo-pag-projeto.png'
import wheels from '../../images/4wheels-pag-projeto.png'
import confeitariaOpera from '../../images/confeitaria-pag-projeto.png'
import dadosPaises from '../../images/worldMap-pag-projeto.png'
import idVisual from '../../images/id-visual-pag-projeto.png'
import convite from '../../images/convite-pag-projeto.png'
import html from '../../images/html.svg'
import css from '../../images/css.svg'
import csharp from '../../images/csharp.svg'
import php from '../../images/php.svg'
import sql from '../../images/sql.svg'
import java from '../../images/java.svg'
import react from '../../images/react.svg'
import reactNative from '../../images/reactNative.svg'
import javaScript from '../../images/javascript.svg'
import { Link } from 'react-router-dom'

function Projetos() {

    function projetosGit() {
        window.open("https://github.com/Karol124A?tab=repositories", "_blank");
    }

    function gitHub() {
        window.open("https://github.com/Karol124A", "_blank");
    }

    function Instagram() {
        window.open("https://www.instagram.com/anaah2305/", "_blank");
    }

    function Linkedin() {
        window.open("https://www.linkedin.com/in/ana-karolinyazevedo/", "_blank");
    }

    return (
        <>
            <div className={style.redes}>
                <img src={github} className={style.github} onClick={gitHub} />
                <img src={insta} className={style.insta} onClick={Instagram}/>
                <img src={linkedin} className={style.linkedin} onClick={Linkedin} />
            </div>
            <div id={style.corpo}>
                <div className={style.container}>
                    <div className={style.titulo}>
                        <h1> <strong> HABILIDADES </strong> </h1>
                        
                    </div>
                    <div className={style.habilidades}>
                        <div className={style.hab1}>
                            <img src={html} />
                            <h4>HTML</h4>
                        </div>
                        <div className={style.hab2}>
                            <img src={css} />
                            <h4>CSS</h4>
                        </div>
                        <div className={style.hab3}>
                            <img src={csharp} />
                            <h4>C#</h4>
                        </div>
                        <div className={style.hab4}>
                            <img src={php} />
                            <h4>PHP</h4>
                        </div>
                        <div className={style.hab5}>
                            <img src={sql} />
                            <h4>SQL</h4>
                        </div>
                        <div className={style.hab6}>
                            <img src={java} />
                            <h4>JAVA</h4>
                        </div>
                    </div>

                    <h1> <strong> EM ESTUDO </strong> </h1>
                    <div className={style.estudo}>

                        <div className={style.ling1}>
                            <img src={javaScript} height="80px" width="80px" />
                            <h4>JAVA SCRIPT</h4>
                        </div>

                        <div className={style.ling2}>
                            <img src={reactNative} height="80px" width="80px" />
                            <h4>REACT NATIVE</h4>
                        </div>

                        <div className={style.ling3}>
                            <img src={react} height="80px" width="80px" />
                            <h4>REACT</h4>
                        </div>
                    </div>


                    <div className={style.titulo}>
                        <h1> <strong> PROJETOS  </strong> </h1>
                    </div>
                    <div className={style.projetos}>
                        <div className={style.proj1}>
                            <Link to="/telaProjetoNetflix">
                                <img src={netflix} className={style.netflix} height="170px" width="300px" />
                            </Link>
                        </div>

                        <div className={style.proj2}>
                            <Link to="/telaProjetoTurismo">
                                <img src={turismo} className={style.turismo} height="170px" width="300px" />
                            </Link>
                        </div>

                        <div className={style.proj3}>
                            <Link to="/telaProjetoLocacao">
                                <img src={wheels} className={style.locacao} height="170px" width="300px" />
                            </Link>
                        </div>

                        <div className={style.proj4}>
                            <Link to="/telaProjetoConfeitaria">
                                <img src={confeitariaOpera} className={style.confeitaria} height="170px" width="300px" />
                            </Link>
                        </div>

                        <div className={style.proj5}>
                            <Link to="/telaProjetoDadosPaises">
                                <img src={dadosPaises} className={style.dadosPaises} height="170px" width="300px" />
                            </Link>
                        </div>

                        <div className={style.proj6}>
                            <Link to="/telaProjetoNome">
                                <img src={idVisual} className={style.nome} height="170px" width="300px" />
                            </Link>
                        </div>

                        <div className={style.proj7}>
                            <Link to="/telaProjetoConvite">
                                <img src={convite} className={style.convite} height="170px" width="300px" />
                            </Link>
                        </div>

                    </div>

                    <div className={style.btnGit}>
                        <button className={style.buttonGitHub} onClick={projetosGit}> Projetos no Git Hub </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Projetos