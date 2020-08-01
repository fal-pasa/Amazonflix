import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../../Layout/mainLayout'
import FormField from '../../components/FormField'
import useForm from '../../hooks/useForm'
import categoriasRepository from '../../repositories/categorias'

function CadastroCategoria () {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#F08804'
  }

  const { handleChange, values, clearForm } = useForm(valoresIniciais)

  const [categorias, setCategorias] = useState([])

  async function loadCategories () {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer)
      })
  }

  useEffect(() => {
    loadCategories()
  }, [])

  return (
    <MainLayout>
      <h1>
        Cadastro de Categoria
      </h1>

      <form onSubmit={function handleSubmit (event) {
        event.preventDefault()
        categoriasRepository.create({
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.cor
        })
          .then(() => {
            clearForm()
            loadCategories()
          })
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

        <button className="ButtonLink" type="submit">
          Cadastrar
        </button>
      </form>

      {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`Categoria_${categoria.id}`} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '12px 0',
            padding: '12px 0',
            borderBottom: '1px solid #fff4'
          }}>

            <div>{categoria.titulo}</div>

            <button
              className="ButtonLink"
              onClick={function handleSubmit () {
                categoriasRepository.deleteCategoria({
                  id: categoria.id
                })
                  .then(() => {
                    loadCategories()
                  })
              }}
            >
              Deletar
            </button>
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
