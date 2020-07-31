import React from 'react'
import MainLayout from '../../Layout/mainLayout'
import { Link } from 'react-router-dom'

function CadastroVideo () {
  return (
    <MainLayout>
      <hi>Cadastro de videos</hi>
      <Link to="/cadastro/categoria">
                Cadastro de Categoria
      </Link>
    </MainLayout>
  )
}

export default CadastroVideo
