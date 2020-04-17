import React, { Component } from 'react';
import axios from 'axios';

import Header from '../../Components/Header/header';

import './styles.css';

export default class Pedidos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }
    }
    
    componentDidMount() {
        axios.get("http://localhost:8080/findall-orders")
        .then(response =>{
            this.setState({ orders: response.data })
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
                            <th>Data do Pedido</th>
                            <th>Valor Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.state.orders.map(order => (
                            <tr key={order.idOrder}>
                                <td name="id">{order.idOrder}</td>
                                <td>{(JSON.stringify(order.date)).slice(1, 11)}</td>
                                <td>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.totalPrice)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
        )
    }
}

