import React, { Component } from 'react';
import './form-contact.css';
import { Link, withRouter } from "react-router-dom";

import { Col, Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap';

class FormContact extends Component {

    handleSent(e) {
        alert("Mensagem enviada com sucesso! Em breve entraremos em contato.") }

    render() {
        return (
            <>
                <div className="container mt-4">
                    <div className="row d-flex justify-content-center">
                        <Container >
                            <div className="text-container" >
                                <h2>Fale conosco</h2>
                            </div>
                            <form onSubmit={this.handleSent}>
                                <FormGroup>
                                    <FormGroup>
                                        <Label>Nome</Label>
                                        <Input name="name" type="text" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>E-mail</Label>
                                        <Input name="email" type="email" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleSelect">Assunto</Label>
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>Selecione o assunto</option>
                                            <option>Informação</option>
                                            <option>Reclamação</option>
                                            <option>Sugestão</option>
                                            <option>Outro</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Mensagem</Label>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </FormGroup>

                                    <Button type="submit">
                                        Enviar
                                    </Button>
                                </FormGroup>
                            </form>
                        </Container>
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(FormContact);