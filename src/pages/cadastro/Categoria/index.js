import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    return(
      <PageDefault>
        Cadastro de Categoria

        <Link to="/">
          Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;
  