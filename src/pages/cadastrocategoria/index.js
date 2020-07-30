import React from 'react';
import MainLayout from '../../Layout/mainLayout'; 
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <MainLayout>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </MainLayout>
  )
}

export default CadastroCategoria;