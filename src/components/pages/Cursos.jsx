import React from 'react'
import style from './layouts/Cursos.module.css'
import github from '../../images/github.svg'
import insta from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'



function Cursos() {

    function Dev() {
        var novoConteudo = "FEV 2021 - Atualmente\n\nInstituição: ETEC ERMELINDA GIANNINI TEIXEIRA\n\nTrabalhei com algumas linguagens de programação, como por exemplo: C#, Java e PHP. Também realizei alguns projetos de design digital, no qual aprendemos a utilizar a ferramenta Gimp.\n\nAtualmente estou estudando React Native, React e Java Script"

        var divAdaptada = document.getElementById('texto')

        divAdaptada.innerText = novoConteudo;

        var newTitulo = "Desenvolvimento de Sistemas"

        var divTitulo = window.document.getElementById('titulo')

        divTitulo.innerHTML = newTitulo

    }

    function Ingles() {
        var novoConteudo = "AGO 2022 - Atualmente \n\n Instituição: INTERAFLIX - Santana de Parnaíba \n\n Nível Básico"

        var divAdaptada = document.getElementById('texto')

        divAdaptada.innerText = novoConteudo;

        var newTitulo = "Inglês"

        var divTitulo = window.document.getElementById('titulo')

        divTitulo.innerHTML = newTitulo

    }

    function Aps() {
        var novoConteudo = "DEZ 2022  - JAN 2023 \n\n Instituição: FUNDAÇÃO BRADESCO - Online Santana de Parnaíba \n\n Neste curso aprendi sobre planejamento de um projeto, métodos e metodologias utilizadas para a documentação, tipos de requisitos e ciclo de vida de um projeto.";

        var divAdaptada = document.getElementById('texto')

        divAdaptada.innerText = novoConteudo

        var newTitulo = "Análise e Desenvolvimento de Sistemas"

        var divTitulo = window.document.getElementById('titulo')

        divTitulo.innerHTML = newTitulo

    }

    function Info() {
        var novoConteudo = "Realizado em duas instituições: \n\n FEV - NOV 2017 \n\n Instituição: PROJETO FAZENDINHA (PROFAZ) \n\n Ao longo dos cursos trabalhei conceitos como: sistema operacional Windows, Word, Excel e Power Point, Internet e básico de hardware"
            + "\n\n AGO - OUT 2016 \n\n Instituição: PROJETO CONNECT (Prefeitura) - Santana de Parnaíba \n\n Informática Básica de Windows, Word, Excel, PowerPoint e Internet"

        var divAdaptada = document.getElementById('texto')

        divAdaptada.innerText = novoConteudo;

        var newTitulo = "Informática Básica"

        var divTitulo = window.document.getElementById('titulo')

        divTitulo.innerHTML = newTitulo

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
                <img src={insta} className={style.insta} />
                <img src={linkedin} className={style.linkedin} onClick={Linkedin} />
            </div>
            <div className={style.titulo}>
                <h1> <strong> CURSOS </strong> </h1>
            </div>

            <div id={style.corpo}>
                <div className={style.container}>
                    <div className={style.conjuntoBot}>
                        <div className={style.botao1}>
                            <button className={style.buttonDev} onClick={Dev}> Desenvolvimento de Sistemas </button>
                        </div>

                        <div className={style.botao2}>
                            <button className={style.buttonEnglish} onClick={Ingles}> Inglês </button>
                        </div>

                        <div className={style.botao3}>
                            <button className={style.buttonAps} onClick={Aps} > Análise e Desenvolvimento de Sistemas </button>
                        </div>

                        <div className={style.botao4}>
                            <button className={style.buttonInfo} onClick={Info} > Informática Básica </button>
                        </div>
                    </div>

                    <div className={style.desc}>
                        <h2 id='titulo'> <strong> CURSOS DESENVOLVIDOS </strong> </h2>
                        <p id='texto'>Clique em algum dos botões para verificar os cursos que já fiz!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cursos