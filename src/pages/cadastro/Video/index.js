import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return(
      <PageDefault>
        Cadastro de video

        <Link to="/cadastro/categoria">
          cadastrar categoria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;
  