import React, { useState, useEffect } from 'react';

import './styles.css';

import Header from '../../components/header';

import api from '../../services/api';

export default function Clientes() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/find-users')
      .then(response => {
        setUsers(response.data);
      })
  });

  return (
    <>
      <Header />
      <button onClick="">Trazer Clientes</button>
      <header>
        <ul>
          {users.map(user => (
            <li key={user.idUser}>
              <strong>Nome: </strong>
              <p>{user.firstName}</p>

              <strong>Sobrenome: </strong>
              <p>{user.lastName}</p>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
