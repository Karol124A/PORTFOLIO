import React from 'react'
import style from './layouts/Sobre.module.css'
import github from '../../images/github.svg'
import insta from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import fotoPerfil from '../../images/foto-perfil.jpeg'

function Sobre() {

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
            <div className={style.corpo}>
                <h1 className={style.tituloSobre}> <strong> SOBRE </strong></h1>
                <hr></hr>
            </div>
            
            <div id={style.container}>
                <img src={fotoPerfil} className={style.myPhoto} />
                <div className={style.bloco}>
                    <p>Olá, me chamo Ana Karoliny, tenho 16 anos, e sou uma estudante apaixonada por música e programação.
                        Quando conheci as possibilidades que a tecnologia poderia me proporcionar, não perdi a oportunidade de conhecê-la melhor. Logo senti que era a chance de me arriscar na área da programação.
                        Atualmente estou no terceiro ano do curso de Desenvolvimento de Sistemas e quero me aprofundar mais na área, para que assim me torne uma grande profissional!
                    </p>
                </div>
                <div className={style.btnSobreMim}>
                  <a href="public/Curriculo - Ana Karoliny.pdf" download className={style.btnCurriculo}>CURRÍCULO</a>
                </div>
            </div>
        </>
    )
}

export default Sobre