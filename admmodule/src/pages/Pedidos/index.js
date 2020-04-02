import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/header';
import ConsultaPedidos from '../../components/consulta-pedidos/consulta-pedidos';


export default function Pedidos() {
  return (
    <>
    <Header />
    <ConsultaPedidos/>
    </>
  );
}
