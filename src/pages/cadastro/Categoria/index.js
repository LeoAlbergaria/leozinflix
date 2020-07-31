import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    return(
      <PageDefault>
        Cadastro de Categoria

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
          Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;
  