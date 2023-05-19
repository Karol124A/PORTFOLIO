import React from 'react'
import style from './layouts/Redes.module.css'
import github from '../../images/github.svg'
import insta from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import arteProgramacao from '../../images/arte_programacao.png'


function Home() {

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
                <img src={insta} className={style.insta} onClick={Instagram} />
                <img src={linkedin} className={style.linkedin} onClick={Linkedin} />
            </div>
            <div className={style.conteudo}>
                <div className={style.container}>
                    <div className={style.titulos}>
                        <h3 className={style.inicioTit}> Olá eu sou</h3>
                        <h1>
                            <span>A</span>
                            <span>n</span>
                            <span>a</span>
                            <span> </span>
                            <span>K</span>
                            <span>a</span>
                            <span>r</span>
                            <span>o</span>
                            <span>l</span>
                            <span>i</span>
                            <span>n</span>
                            <span>y</span>
                        </h1>
                    </div>

                    <img src={arteProgramacao} className={style.arte} />
                </div>
            </div>
           
        </>
    )
}

export default Home