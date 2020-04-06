import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from '../../Components/Header/header';

import './styles.css';

export default class PedidoCliente extends Component {

    constructor(props){
        super(props);
    }

    state = {
        orders: []
    }


    componentDidMount() {
        axios.get(`http://localhost:8080/findall-orders`)
          .then(res => {
            const orders = res.data;
            this.setState({ orders });
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
                                <th>Data</th>
                                <th>Valor do Pedido</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.orders.map(order => (
                                <tr>
                                    <td key={order.idOrder}>{order.idOrder}</td>
                                    <td>{(order.date).toLocaleString('pt-BR')}</td>
                                    <td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.totalPrice)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Link  to="/clientes">
                    <button onClick="" className="voltar" onClick="">Voltar para Clientes</button>
                </Link>
            </>
        )
    }
}
