import React from 'react'
import './style.css'
import logo from '../../assets/imgs/logo.png'
import ButtonLink from '../button-link'
import { Link } from 'react-router-dom'

function Menu () {
  return (
    <nav className="Menu">

      <Link to="/">
        <img src={logo} className="Logo" alt="AluraFlix log" />
      </Link>

      <ButtonLink as={Link} className="ButtonLink" href="/cadastro/video">
        Novo Video
      </ButtonLink>

    </nav>
  )
}

export default Menu
