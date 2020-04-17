import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from '../../Components/Header/header';

import './styles.css';

export default class PedidoCliente extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        orders: [],
        idUser: ""
    }


    componentDidMount() {
        const _ID = this.props.history.location.state ;

        try {
            axios.get(`http://localhost:8080/find-orders-byuser/${_ID}`)
                .then(res => {
                    if (res.status === 400) {
                        throw new Error(res.data);
                    } else {
                        const orders = res.data;
                        this.setState({ orders, idUser: _ID });
                    }
                })
        } catch (err) {
            alert("ah não! macacos me mordam \n/" + err)
        } 
        //console.log(this.props);
        //console.log(this.props.history.location.state )
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
                            {
                                this.state.orders.length === 0 
                                ? ""
                                : (
                                    this.state.orders.map(order => (
                                        <tr>
                                            <td key={order.idOrder}>{order.idOrder}</td>
                                            <td>{(JSON.stringify(order.date)).slice(1, 11)}</td>
                                            <td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.totalPrice)}</td>
                                        </tr>
                                    ))
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
                <Link to="/clientes">
                    <button onClick="" className="voltar" onClick="">Voltar para Clientes</button>
                </Link>
            </>
        )
    }
}
