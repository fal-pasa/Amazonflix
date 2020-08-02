/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Loading from '../../components/Loading'
import MainLayout from '../../Layout/mainLayout'
import categoriasRepository from '../../repositories/categorias'
import Contesto from '../../utilits/context'
function Home () {
  const [dadosIniciais, setDadosIniciais] = useState([])

  async function loadVideos () {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    loadVideos()
  }, [])

  return (
    <Contesto.Provider value={{ loadVideos }}>
      <MainLayout paddingAll={0}>
        {
          dadosIniciais.length === 0 && (
            <Loading/>
          )
        }

        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={dadosIniciais[0].videos[0].description}
                />
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            )
          }

          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          )
        })}
      </MainLayout>
    </Contesto.Provider>
  )
}

export default Home
