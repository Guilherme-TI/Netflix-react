// Navbar.js
import './Navbar.css'
import React, { useEffect } from 'react'

const Navbar = () => {
  useEffect(() => {
    const menu = document.querySelector('.menu')
    const NavMenu = document.querySelector('.nav-menu')
    const navigation = document.querySelector('.navigation') // Add this line

    const handleClick = (event) => {
      if (event.target.closest('.menu')) {
        menu.classList.toggle('ativo')
        NavMenu.classList.toggle('ativo')
        navigation.classList.toggle('ativo') // Toggle 'ativo' class on navigation
      }
    }

    menu.addEventListener('click', handleClick);

    return () => {
      menu.removeEventListener('click', handleClick);
    }
  }, []) // O array vazio como segundo argumento garante que o efeito seja executado apenas uma vez durante a montagem do componente

  return (
        <nav className="navigation">
            <a href="#" className="logo"><img src="https://logopng.com.br/logos/netflix-94.png" alt="logo" /></a>
            <ul className="nav-menu">
                <li className="nav-item"><a href="index.html">Início</a></li>
                <li className="nav-item"><a href="#">Filmes</a></li>
                <li className="nav-item"><a href="#">Séries</a></li>
            </ul>
            <div className="menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
  )
}

export default Navbar
