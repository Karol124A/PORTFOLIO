import React, { useEffect, useRef } from 'react'
import style from './layouts/TelaDoProjeto.module.css'
import retRoxo from '../../images/ret_roxo.png'
import iconeVoltar from '../../images/seta-esquerda.png'

function TelaDoProjeto(props) {

    const inicioRef = useRef(null)
    useEffect(() => {
        inicioRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [])


    function handleClick() {
        window.history.back();
    };

    function back() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div id={style.container} ref={inicioRef}>
                <div className={style.inicio}>
                    <img src={iconeVoltar} className={style.iconVoltar} onClick={handleClick} />
                    <img src={props.imagem} className={style.imagem} />
                </div>
                <div className={style.componentsTitulo}>
                    <h2 className={style.tituloDesc}> <strong> DESCRIÇÃO </strong></h2>
                    <button className={style.github} onClick={props.click}>{props.nameButton}</button>
                </div>
                <div className={style.descricao}>
                    <div className={style.conteudo}>
                        <p id={style.texto}>{props.descricao}</p>
                    </div>
                    <div className={style.tecnologias}>
                        <h4>Tecnologias</h4>
                        <div className={style.imgTec}>
                            <img src={props.img1} className={style.img1} />
                            <img src={props.img2} className={style.img2} />
                        </div>
                    </div>
                </div>
                <div className={style.imagensPrograma}>
                    <img src={props.imagem1} className={style.imagem1} />
                    <img src={props.imagem2} className={style.imagem2} />
                    <img src={props.imagem3} className={style.imagem3} />
                    <img src={props.imagem4} className={style.imagem3} />
                </div>

                <button className={style.btnVoltar} onClick={back}>VOLTAR</button>
            </div>

        </>
    )
}

export default TelaDoProjeto