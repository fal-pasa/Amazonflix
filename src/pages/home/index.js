import React from 'react';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../dados_iniciais.json';
import MainLayout from '../../Layout/mainLayout';

function Home() {
  return (
    <MainLayout style={{backgroundColor: '#141414'}}>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]} 
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]} 
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]} 
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]} 
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]} 
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]} 
      />
    </MainLayout>
  );
}

export default Home;
