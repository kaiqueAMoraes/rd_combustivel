import React, { Component } from 'react';
import axios from 'axios'
// import { withRouter } from 'react-router-dom';
import {
    Navbar, Input, Button, Label, InputGroup, Container, Col, Spinner, Form
} from 'reactstrap';
import "./consulta-pedidos.css";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ConsultaPedidos extends Component {
    state = {
        carregando: false,
        pedidos: []
    }

    buscarPedidos = async (evento) => {
        evento.preventDefault()

        this.setState({ carregando: true })

        const idInput = evento.target.idInput.value;

        //const dateInput = evento.target.dateInput.value;


        // const pedidos = await axios(
        //     `http://localhost:8080/search-order`,
        //     {
        //         params: { idOrder: idInput, dateInput }
        //     }
        // )

        const pedidos = await axios (`http://localhost:8080/find-orders-byuser/${idInput}`)

    

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
                    <p>Selecione apenas um dos campos para preecher e buscar pelo pedido</p>
                    <Form onSubmit={this.buscarPedidos}>
                        <InputGroup className="infoPedido" >
                            <Input type="radio" name="radio1" />
                            <Col md={2} className="form-group">
                                <Label> Cód do pedido </Label>
                                <Input name="idInput" type="text" className="form-control" />
                            </Col>

                            <Input type="radio" name="radio1" />
                            <Col md={6} className="form-group">
                                <Label>Data do pedido</Label>
                                <Input name="dateInput" type="date" className="form-control" />
                            </Col>

                            <Input type="radio" name="radio1" />
                            <Col md={6} className="form-group">
                                <Label>Id do usuário</Label>
                                <Input name="idUserInput" type="text" className="form-control" />
                            </Col>
                        </InputGroup>
                        <InputGroup className="infoUser">
                            <Input type="radio" name="radio1" />
                            <Col md={6} className="form-group">
                                <Label>CPF do usuário</Label>
                                <Input name="cpfInput" type="text" className="form-control" />
                            </Col>

                            <Input type="radio" name="radio1" />
                            <Col md={6} className="form-group">
                                <Label>E-mail do usuário</Label>
                                <Input name="emailInput" type="text" className="form-control" />
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
                            {/* <Navbar className="container titulo">
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
                            </Table> */}

                            {/* //teste de tabela nova */}
                            <TableContainer component={Paper}>
                                <Table className="tableResults" size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Id pedido</TableCell>
                                            <TableCell align="right">Data pedido</TableCell>
                                            <TableCell align="right">Preço total</TableCell>
                                            {/* <TableCell align="right">Nome usuário</TableCell>
                                            <TableCell align="right">E-mail usuário</TableCell>
                                            <TableCell align="right">CPF usuário</TableCell>
                                            <TableCell align="right">Endereço</TableCell>
                                            <TableCell align="right">Produtos</TableCell> */}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.pedidos.map(pedidos => (
                                            <TableRow key={pedidos.idOrder}>
                                                <TableCell align="right">{pedidos.date}</TableCell>
                                                <TableCell align="right">{pedidos.totalPrice}</TableCell>
                                                {/* <TableCell align="right">{pedidos.idUser.firstName}</TableCell>
                                                <TableCell align="right">{pedidos.idUser.email}</TableCell>
                                                <TableCell align="right">{pedidos.idUser.cpf}</TableCell>
                                                <TableCell align="right">{pedidos.idAddress.idAddress}</TableCell>
                                                <TableCell align="right">{pedidos.idUser.product}</TableCell> */}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </>
                    )}
            </div>
        )
    }
}

// export default withRouter(ConsultaPedidos);
export default ConsultaPedidos;