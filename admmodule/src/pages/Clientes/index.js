import React, { useState, useEffect } from 'react';

import './styles.css';

import Header from '../../components/header';

import api from '../../services/api';

export default function Clientes() {

  const [users, setUsers] = useState([]);


  function findClients() {
        api.get('/find-users')
          .then(response => {
            setUsers(response.data);
          })
        }
 

  return (
    <>
      <Header />
      <button onClick={() => findClients()}>Trazer Clientes</button>
      
    </>
  );
}
