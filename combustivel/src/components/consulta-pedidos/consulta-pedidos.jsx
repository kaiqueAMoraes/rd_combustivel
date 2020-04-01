import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import {
    Navbar, Input, Button, Label, InputGroup, InputGroupAddon, Container, Col, Row, Spinner, Form
}    from 'reactstrap';

import './consulta-pedidos.css';

class ConsultaPedidos extends Component {
    state = {
        carregando: false,
        pedidos: []
    }

    buscarPedidos = async (evento) => {
        evento.preventDefault()

        this.setState({ carregando: true })

        const form = evento.target
        const inputGroup = form.children[0]
        const input = inputGroup.children[0]

        const pedidos = await axios("http://localhost:8080/find-orders/1")

        this.setState({ pedidos: [pedidos.data, ...this.state.pedidos], carregando: false })
    }

    render() {
        return (
            <>
                <Container className="main-pedido form">
                    <Navbar className="container titulo">
                        Consultar pedidos
                    </Navbar>
                    <Form onSubmit={this.buscarPedidos}>
                        <InputGroup className="infoPedido" >
                            <Col md={6} className="form-group">
                                <Label>Id do pedido</Label>
                                <Input type="text" className="form-control" />
                            </Col>
                            <Col md={6} className="form-group">
                                <Label>Data do pedido</Label>
                                <Input type="date" className="form-control" />
                            </Col>
                        </InputGroup>
                        <InputGroup className="infoUser">
                            <Col md={6} className="form-group">
                                <Label>Id do usuário</Label>
                                <Input type="text" className="form-control" />
                            </Col>
                            <Col md={6} className="form-group">
                                <Label>E-mail do usuário</Label>
                                <Input type="text" className="form-control" />
                            </Col>
                        </InputGroup>
                        <Button type="submit" className="btn btn-success">
                            Buscar
                        </Button>
                    </Form>

                </Container>

                {this.state.carregando ? (<Container className="h-100 d-flex flex-column justify-content-center align-items-center">
                    <Spinner color="dark" size="lg" />
                    <span>Carregando...</span>
                </Container>
                ) : (
                        <Container className="resultado-pedido form">

                            <Navbar className="container titulo">
                                Resultados
                            </Navbar>
                            <InputGroup className="infoPedido-result" >
                                <Col md={4} className="form-group">
                                    <Label>Id do pedido</Label>
                                    <Input type="text" className="form-result">{this.pedidos.idOrder} </Input>
                                </Col>
                                <Col md={4} className="form-group">
                                    <Label>Data do pedido</Label>
                                    <Input type="date" className="form-result">{this.pedidos.date} </Input>
                                </Col>
                                <Col md={4} className="form-group">
                                    <Label>Valor total</Label>
                                    <Input type="text" className="form-result">{this.pedidos.totalPrice} </Input>
                                </Col>
                            </InputGroup>

                            <InputGroup className="infoUser result">
                                <Col md={4} className="form-group">
                                    <Label>Id do usuário</Label>
                                    <Input type="text" className="form-result" />
                                </Col>
                            </InputGroup>
                            <InputGroup className="infoUser result">
                                <Col md={6} className="form-group">
                                    <Label>Nome completo</Label>
                                    <Input type="text" className="form-result" />
                                </Col>
                                <Col md={6} className="form-group">
                                    <Label>E-mail do usuário</Label>
                                    <Input type="text" className="form-result" />
                                </Col>
                            </InputGroup>
                            <InputGroup className="infoUser result">
                                <Col md={12} className="form-group">
                                    <Label>Endereço</Label>
                                    <Input type="text" className="form-result" />
                                </Col>
                            </InputGroup>
                        </Container>
                    )}
            </>
        );
    }
}

export default withRouter(ConsultaPedidos);
