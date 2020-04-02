import React, { Component } from 'react';
import axios from 'axios'
import {
    Navbar, Input, Button, Label, InputGroup, Container, Col, Spinner, Form, Table, TableBody
} from 'reactstrap';
import "./consulta-clientes.css";

class ConsultaClientes extends Component {
    state = {
        carregando: false,
        clientes: []
    }

    buscarClientes = async (evento) => {
        evento.preventDefault()

        this.setState({ carregando: true })

        const idInput = evento.target.children[0].children[0].children[1].value;

        const clientes = await axios(`http://localhost:8080/find-user/${idInput}`);
        
        this.setState({ clientes: [clientes.data, ...this.state.clientes], carregando: false })

        console.log(clientes);
    }

    render() {
        return (
            <>
                <div>
                <Container className="main-pedido form">
                    <Navbar className="container titulo">
                        Consultar clientes
                    </Navbar>
                    <Form onSubmit={this.buscarClientes}>
                        <InputGroup className="infoPedido" >
                            <Col md={6} className="form-group">
                                <Label>Id do pedido</Label>
                                <Input type="text" className="form-control" />
                            </Col>
                            <Col md={6} className="form-group">
                                <Label>Data do pedido</Label>
                                <Input type="date" className="form-control" />
                            </Col>
                            <Col md={6} className="form-group">
                                <Label>Id do usuário</Label>
                                <Input type="text" className="form-control" />
                            </Col>
                        </InputGroup>
                        <InputGroup className="infoUser">
                            <Col md={6} className="form-group">
                                <Label>Nome do usuário</Label>
                                <Input type="text" className="form-control" />
                            </Col>
                            <Col md={6} className="form-group">
                                <Label>E-mail do usuário</Label>
                                <Input type="text" className="form-control" />
                            </Col>
                        </InputGroup>
                        <Button color="success">
                            Buscar pedido
                        </Button>
                    </Form>

                </Container>

                {this.state.carregando ? (
                    <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <Spinner color="dark" size="lg" />
                        <span>Carregando...</span>
                    </Container>
                ) : (
                        <>
                            <Navbar className="container titulo">
                                Resultado
                            </Navbar>
                            <Table bordered className="tableResults" >
                                <thread className="colunm">
                                    <tr>
                                        <th>Id pedido</th>
                                        <th>Data pedido</th>
                                        <th>Valor total</th>
                                        <th>Id usuário</th>
                                        <th>Nome completo</th>
                                        <th>E-mail</th>
                                        <th>Endereço</th>
                                    </tr>
                                </thread>
                                <tbody className="colunmResult">
                                    {this.state.pedidos.map(pedidos => (
                                        <tr>
                                            <th scope="row">{pedidos.idOrder}</th>
                                            <td>{pedidos.date}</td>
                                            <td>{pedidos.totalPrice}</td>
                                            <td>{pedidos.idUser.idUser}</td>
                                            <td>{pedidos.idUser.firstName}</td>
                                            <td>{pedidos.idUser.email}</td>
                                            <td>{pedidos.idAddress.idAddress}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table> 
                        </>
                    )}
            </div>
            </>
        )
    }
}