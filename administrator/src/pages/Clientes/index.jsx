import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from '../../Components/Header/header';

import './styles.css';

export default class Clientes extends React.Component{

    state = {
        users: []
      }
    
    handleOrders = (id) => {
        console.log(id)
        this.props.history.push('/pedido-cliente', id);
    }

    handleDelete = (id) => {

        axios.delete(`http://localhost:8080/delete-user/${id}`)
          .then(res => {
            window.location.reload();
          })

          alert('Usuário deletado!')
      }

      componentDidMount() {
         //  const {page} = this.props.match.params;
         //  this.loadData(page);
         const {page} = axios.get(`http://localhost:8080/find-users`)
          .then(res => {
            const users = res.data.content;
            this.setState({ users });
            console.log(users);
          })
      }

    render() {
        return (
            <>
            <Header />
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Data de Nascimento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.state.users.map(user => (
                            <tr>
                                <td name="id" key={user.idUser}>{user.idUser}</td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.birth}</td>
                                <button id="editar" className="buttons" onClick="">Editar</button>
                                <button onClick={() => this.handleDelete(user.idUser)} id="deletar" className="buttons">Deletar</button>
                                <button onClick={() => this.handleOrders(user.idUser)} id="pedidos" className="buttons">Pedidos</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
        ) 
    }
}
