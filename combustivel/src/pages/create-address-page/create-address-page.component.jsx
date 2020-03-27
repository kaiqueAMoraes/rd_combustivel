import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';



import FormInput from './form-input/form-input.componets';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormGroup from 'react-bootstrap/FormGroup'
import Alert from 'react-bootstrap/Alert'

import BoxContainer from "../../components/box-container/box-container.component"

import './create-address-page.styles.scss';

class CreateAddress extends Component {
    constructor(props) {
        super(props);

        if (!sessionStorage.getItem('user'))
            this.props.history.push('/');

        this.state = {
            "cep": "",
            "isInvalidCep" : false,
            "state": "",
            "city": "",
            "district": "",
            "street": "",
            "number": "",
            "complement": "",
            "errorMessage": ""
        }
        //this.handleChange = this.handleChange.bind(this);
    }

    errorMessage = message => {
        this.setState({ errorMessage: `${message}` });
    }

    clearErrorMessage = () => {
        this.setState({ errorMessage: "" });
    }

    clearState = () => {
        this.setState({
            "cep": "",
            "state": "",
            "city": "",
            "district": "",
            "street": "",
            "number": "",
            "complement": ""
        })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleCepChange = e => {
        let config = {
            method: "get",
            mode: 'cors'
        }
        const { name, value } = e.target;
        this.setState({ [name]: value },
            () => {
                var intNum = /^[0-9]+$/;
                if (!this.state.cep.match(intNum)) {
                    this.setState({
                        cep: this.state.cep.replace(/[^\d]+/g, '')
                    });
                }
                else if (this.state.cep.length >= 8) {
                    this.setState({ cep: this.state.cep.substring(0, 8) },
                        () => {
                            fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`, config)
                                .then(response => response.json())
                                .then(dados => {
                                    if (dados.erro) {
                                        return this.setState({ cep: "" })
                                    }
                                    this.setState({
                                        street: dados.logradouro,
                                        district: dados.bairro,
                                        city: dados.localidade,
                                        state: dados.uf,
                                    })
                                })
                        }
                    )
                }
            }
        );
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { city, cep, street, district, state, number, complement, errorMessage } = this.state;

        // TODO este bloco de codigo é um codigo mocado e não deve ser passado para produção

        cep === "" ? this.setState({ vName: "este campo precisa estar preenchido" })
            : this.setState({ vName: "" })

        street === "" ? this.setState({ vCpf: "este campo precisa estar preenchido" })
            : this.setState({ vCpf: "" })

        district === "" ? this.setState({ vMail: "este campo precisa estar preenchido" })
            : this.setState({ vMail: "" })

        state === "" ? this.setState({ vPass: "este campo precisa estar preenchido" })
            : this.setState({ vPass: "" })

        city === "" ? this.setState({ vBirth: "este campo precisa estar preenchido" })
            : this.setState({ vBirth: "" })

        number === "" ? this.setState({ vBirth: "este campo precisa estar preenchido" })
            : this.setState({ vBirth: "" })


        // TODO fim do codigo mocado !!!!! ==== nao passar para produção   

        try {
            let address = {};
            await axios.get('http://localhost:8080/find-user-email/' + sessionStorage.getItem('email'))
            .then( response => {
                address = {
                    "cep": cep,
                    "state": state,
                    "city": city,
                    "district": district,
                    "street": street,
                    "number": number,
                    "complement" : complement,
                    "user" : {
                        "idUser" : response.data[0].idUser
                    }
                }     
            }).catch(error => {
                console.log(error)
            });
                await axios.post("http://localhost:8080/create-address", address)
                    .then(response => {
                        if (response.status === 200) {
                            this.setState({
                                errorMessage: "",
                                successMessage: "endereço cadastrado com sucesso"
                            })
                            setInterval(() => {
                                this.clearState();
                                //this.props.history.push("/dashboard");
                                //window.location.reload();
                            }, 1500);
                        } else {
                            throw new Error(response.data);
                        }
                    })
        } catch (err) {
            console.log(err)
            //this.setState({ errorMessage: err.response})
        }
    }

    render() {
        const { cep, street, district, state, number, complement, errorMessage } = this.state;

        return (
            <div className="container mt-4">
                <div className="row d-flex justify-content-center">
                    <BoxContainer >
                        <div className="text-container" >
                            <h4>Adicionar novo endereço</h4>
                        </div>
                        <form method="get" onSubmit={this.handleSubmit}>


                            <FormGroup>

                                <FormInput
                                    name="cep"
                                    type="text"
                                    value={cep}
                                    handleChange={this.handleCepChange}
                                    label='cep'
                                    size="input-small"
                                    required />

                                <FormInput
                                    name="street"
                                    type="text"
                                    value={street}
                                    handleChange={this.handleChange}
                                    label='Rua'

                                    required />

                                <FormInput
                                    name="district"
                                    type="text"
                                    value={district}
                                    handleChange={this.handleChange}
                                    label='Bairro'
                                    size="input-small"
                                    required />

                                <FormInput
                                    name="state"
                                    type="text"
                                    value={state}
                                    handleChange={this.handleChange}
                                    label='Estado'
                                    size="input-small"
                                    required />

                                <FormInput
                                    name="number"
                                    type="text"
                                    value={number}
                                    handleChange={this.handleChange}
                                    label='numero casa'
                                    size="input-small"
                                    required />

                                <FormInput
                                    name="complement"
                                    type="text"
                                    value={complement}
                                    handleChange={this.handleChange}
                                    label='complemento'

                                    required />

                                <CustomButton
                                    type="submit"
                                    onClick={this.handleSubmit} >
                                    adicionar novo endereço
                            </CustomButton>

                                {this.state.successMessage ? (<Alert className="m-4" variant='success'>{this.state.successMessage}</Alert>) : ""}
                                {this.state.errorMessage ? (<Alert className="m-4" variant='danger'>{this.state.errorMessage}</Alert>) : ""}

                            </FormGroup>

                            <Link to='/dashboard'>voltar</Link>

                        </form>
                    </BoxContainer>
                </div>
            </div>
        )
    }
}



export default withRouter(CreateAddress);