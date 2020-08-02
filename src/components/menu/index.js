import React from 'react'
import './style.css'
import logo from '../../assets/imgs/logo.png'
// import ButtonLink from '../button-link'
import CadastroVideo from '../../pages/cadastrovideo'
import { Link } from 'react-router-dom'

function Menu () {
  function handleClick () {
    document.querySelector('.videoTeste').style.display = 'grid'
    document.querySelector('body').style.overflow = 'hidden'
  }
  return (
    <nav className="Menu">

      <Link to="/">
        <img src={logo} className="Logo" alt="AluraFlix log" />
      </Link>

      <button className="ButtonLink" onClick={handleClick}>
        Novo Video
      </button>
      <CadastroVideo />
    </nav>
  )
}

export default Menu
