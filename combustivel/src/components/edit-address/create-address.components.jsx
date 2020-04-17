import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FormGroup from 'react-bootstrap/FormGroup';
import FormInput, { FormInputMedium, FormInputSmall } from "../form-input/form-input.componets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { addressSelected, addAddress } from '../../redux/address/address.actions';
import { errorMessage, successMessage } from '../../redux/message/message.actions';

class EditAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cep: "",
            street: "",
            district: "",
            state: "",
            city: "",
            complement: "",
            number: ""
        }
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
        const { currentUser, setAddress, addToAddressesList, successMessage } = this.props;
        const { cep, street, district, state, number, complement, city } = this.state


        try {
                    const address = {
                        "cep": cep,
                        "state": state,
                        "city": city,
                        "district": district,
                        "street": street,
                        "number": number,
                        "complement": complement,
                        "idUser": {
                            "idUser" : currentUser.idUser
                        }
                    }
            await axios.post("http://localhost:8080/create-address", address)
                .then(response => {
                    if (response.status === 200) {
                        let addresses = []
                        axios.get(`http://localhost:8080/find-address-byuser/${currentUser.idUser}`)
                            .then(response => {
                                return addToAddressesList(response.data)
                            }).catch(error => {
                                console.log(error)
                            });
                            
                }})
        } catch (err) {
            console.log(err)

        }
    }

    render() {
        const { cep, street, district, state, number, complement, city } = this.state
        return (
            <>
                <FormGroup>

                    <FormInputSmall
                        name="cep"
                        type="text"
                        value={cep}
                        handleChange={this.handleCepChange}
                        label='cep'
                        size="input-small"
                        required />

                    <FormInputSmall
                        name="street"
                        type="text"
                        value={street}
                        handleChange={this.handleChange}
                        label='Rua'

                        required />

                    <FormInputSmall
                        name="district"
                        type="text"
                        value={district}
                        handleChange={this.handleChange}
                        label='Bairro'
                        size="input-small"
                        required />

                    <FormInputSmall
                        name="state"
                        type="text"
                        value={state}
                        handleChange={this.handleChange}
                        label='Estado'
                        size="input-small"
                        required />

                    <FormInputSmall
                        name="complement"
                        type="text"
                        value={city}
                        handleChange={this.handleChange}
                        label='cidade'

                        required />

                    <FormInputSmall
                        name="number"
                        type="text"
                        value={number}
                        handleChange={this.handleChange}
                        label='numero casa'
                        size="input-small"
                        required />


                    <FormInputSmall
                        name="complement"
                        type="text"
                        value={complement}
                        handleChange={this.handleChange}
                        label='complemento'
                        _class="create_address_input"
                    />
                </FormGroup>

                <div
                    type="submit"
                    className="edit-button-address-card"
                    onClick={this.handleSubmit} >
                    <div className="div-address-edit-icon">
                        <FontAwesomeIcon icon={faAddressBook} className="icon-userEdit" />
                    </div>
                cadastrar endereço
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    currentUser : state.user.currentUser,
});

const mapDispatchToProps = dispatch => ({
    setAddress: address => dispatch(addressSelected(address)),
    addToAddressesList: address => dispatch(addAddress(address)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateNewAddress))