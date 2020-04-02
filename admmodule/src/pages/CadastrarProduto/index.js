import React, { useState } from 'react';

import Header from '../../components/header';
import Fomularioproduto from '../../components/cadastro_Produto/cadastroproduto';

export default function CadastrarProduto() {
  return (
    <>
      <Header/>
      <Fomularioproduto />
    </>
  );
}
