import React from 'react'
import style from './layouts/Menu.module.css'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <div className={style.menu}>
                <header>
                    <nav>
                    <h3 className={style.logo}>A</h3>
                        <ul className='menu inline sem-marcador'>
                            <li><Link to="/"> HOME </Link></li>
                            <li><Link to="/sobre"> SOBRE MIM </Link></li>
                            <li><Link to="/projetos"> PROJETOS </Link></li>
                            <li><Link to="/cursos"> CURSOS </Link></li>
                        </ul>
                    </nav>
                </header >
            </div>
        </>
    )
}

export default Menu