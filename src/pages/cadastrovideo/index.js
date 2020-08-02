import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
// import MainLayout from '../../Layout/mainLayout'
import useForm from '../../hooks/useForm'
import FormField from '../../components/FormField'
import FormSelect from '../../components/FormSelect'
import videosRepository from '../../repositories/videos'
import categoriasRepository from '../../repositories/categorias'
import { BoxForm, TitleForm } from './styles'
import ContainerEsc from '../../components/ContainerEsc'
import Contesto from '../../utilits/context'

function CadastroVideo () {
  const [categorias, setCategorias] = useState([])
  const { loadVideos } = useContext(Contesto)

  const categoryTitles = categorias.map(({ titulo }) => titulo)
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
    descricao: '',
    password: ''
  })

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer)
      })
  }, [])

  const history = useHistory()

  function handleClick () {
    history.push('/cadastro/categoria')
    document.querySelector('body').style.overflow = 'auto'
  }

  return (
    <ContainerEsc>
      <BoxForm>
        <TitleForm>
          <h2>Cadastro de Video</h2>
          <button onClick={handleClick}>
            Categorias
          </button>
        </TitleForm>

        <form onSubmit={(event) => {
          event.preventDefault()
          // alert('Video Cadastrado com sucesso!!!1!')

          if (values.password === '123456') {
            const categoriaEscolhida = categorias.find((categoria) => {
              return categoria.titulo === values.categoria
            })

            videosRepository.create({
              titulo: values.titulo,
              url: values.url,
              descricao: values.descricao,
              categoriaId: categoriaEscolhida.id
            })
              .then(() => {
                loadVideos()
                document.querySelector('.videoTeste').style.display = 'none'
                document.querySelector('body').style.overflow = 'auto'
              })
          } else {
            alert('Senha errada')
          }
        }}
        >
          <FormField
            label="Título do Vídeo"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL do Vídeo"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormSelect
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <FormField
            label="Código de segurança"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />

          <button className="ButtonLink" type="submit">
            Cadastrar
          </button>
        </form>
      </BoxForm>
    </ContainerEsc>
  )
}

export default CadastroVideo
