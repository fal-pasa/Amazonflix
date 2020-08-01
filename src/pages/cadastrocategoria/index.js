import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../../Layout/mainLayout'
import FormField from '../../components/FormField'
import ButtonLink from '../../components/button-link'
import useForm from '../../hooks/useForm'

function CadastroCategoria () {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#F08804'
  }

  const { handleChange, values, clearForm } = useForm(valoresIniciais)

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://amazomflix.herokuapp.com/categorias'
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json()
        setCategorias([
          ...resposta
        ])
      })
  }, [])

  return (
    <MainLayout>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit (infosDoEvento) {
        infosDoEvento.preventDefault()
        setCategorias([
          ...categorias,
          values
        ])

        clearForm()
      }}
      >

        <FormField
          label="Nome da Categoria"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <ButtonLink>
          Cadastrar
        </ButtonLink>
      </form>

      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </MainLayout>
  )
}

export default CadastroCategoria
