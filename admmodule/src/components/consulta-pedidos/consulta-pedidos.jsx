import React, { Component } from 'react';
import axios from 'axios'
// import { withRouter } from 'react-router-dom';
import {
    Navbar, Input, Button, Label, InputGroup, Container, Col, Spinner, Form, Table, TableBody
} from 'reactstrap';
import "./consulta-pedidos.css";

// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

class ConsultaPedidos extends Component {
    state = {
        carregando: false,
        pedidos: []
    }

    buscarPedidos = async (evento) => {
        evento.preventDefault()

        this.setState({ carregando: true })

        const idInput = evento.target.idInput.value;

        const dateInput = evento.target.dateInput.value;

        // const nameUserInput = evento.target.children[1].children[0].children[1].value;

        // if (nameUserInput != null) {

        //     const pedidos = await axios (`http://localhost:8080/find-orders-byuser/${nameUserInput}`)

        //     this.setState({ pedidos: [pedidos.data, ...this.state.pedidos], carregando: false })

        //     console.log(pedidos);
        // }

        const pedidos = await axios(
            `http://localhost:8080/search-order`,
            {
                params: { idOrder: idInput, dateInput }
            }
        )

        this.setState({ pedidos: [pedidos.data, ...this.state.pedidos], carregando: false })

        console.log(pedidos);

    }

    render() {
        return (
            <div>
                <Container className="main-pedido form">
                    <Navbar className="container titulo">
                        Consultar pedidos
                    </Navbar>
                    <Form onSubmit={this.buscarPedidos}>
                        <InputGroup className="infoPedido" >
                            <Col md={6} className="form-group">
                                <Label>Id do pedido</Label>
                                <Input name="idInput" type="text" className="form-control" />
                            </Col>
                            <Col md={6} className="form-group">
                                <Label>Data do pedido</Label>
                                <Input name="dateInput" type="date" className="form-control" />
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
                    <Button onClick="">
                        Buscar todos pedidos
                    </Button>

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
        )
    }
}

// export default withRouter(ConsultaPedidos);
export default ConsultaPedidos;