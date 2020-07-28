import React from 'react';
import './style.css';
import logo from '../../assets/imgs/logo.png';
import ButtonLink from '../button-link';

function Menu () {
  return (
    <nav className="Menu">

      <a href="/">
        <img src={logo} className="Logo" alt="AluraFlix log" />
      </a>

      <ButtonLink className="ButtonLink" href="/">
        Novo Video
      </ButtonLink>

    </nav>
  )
}

export default Menu
