import React from 'react';
import axios from 'axios';

import './cardAddress.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { addressSelected, addAddress } from '../../redux/address/address.actions';
import { successMessage, errorMessage } from '../../redux/message/message.actions';
import CreateNewAddress from '../create-address/create-address.components';
import { FormInputSmall } from '../form-input/form-input.componets';
import FormGroup from 'react-bootstrap/FormGroup';

class CardAddress extends React.Component {
    constructor(props) {
        super(props);

        const { cep, state, city, district, street, number, complement, idAddress,id, userId,currentUser } = this.props;

        this.state = {
            "idAdress": id,
            "cep": cep,
            "state": state,
            "city": city,
            "district": district,
            "street": street,
            "number": number,
            "complement": complement,
            "user": {
                "idUser": null
            },
            displayForms: false,
            displayNewField: {
                height: '0',
                width: '100%'
            }
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

        handleEdit = async e => {
        e.preventDefault();
        
        const { cep, state, city, district, street, number, complement, idUser, id, idAddress, currentUser } = this.state;

        const address = {
            "idUser": {
                "idUser": this.props.currentUser.idUser
            },
            "idAddress": this.props.idAddress,
            "cep": cep,
            "state": state,
            "city": city,
            "district": district,
            "street": street,
            "number": number,
            "complement": complement
        }   
        console.log(address)
        try {
            await axios.put("http://localhost:8080/update-address", address)
                .then(response => {
                    console.log(address);
                    if (response.status === 200) {
                        axios.get(`http://localhost:8080/find-address-byuser/${this.props.currentUser.idUser}`)
                            .then(response => {
                                this.setState({ displayForms: !this.state.displayForms , displayNewField: {
                                    height: "0", width: '100%'
                                }})
                                this.props.successMessage("Endereço editado com sucesso")
                                return this.props.addToAddressesList(response.data)
                                
                            }).catch(error => {
                                this.props.addToAddressesList([])
                            });
                    } else {
                    console.log(address);
                        throw new Error(response.data);
                    }
                })
        }
        catch (err) {
            if (err) {
                console.log('err.response')
                console.log(err)
                console.log('err.response')
                
                this.setState({ errorMessage: err.toString(), valid: false })
            }
        }
    }

    handleDelete = async () => {
        const { cep, state, city, district, street, number, idAddress, addToAddressesList, successMessage, currentUser} = this.props;

        const address = {
            "idAddress": idAddress,
            "cep": cep,
            "state": state,
            "city": city,
            "district": district,
            "street": street,
            "number": number,
            "idUser": null
        }

        await axios.put(`http://localhost:8080/update-address`, address).then(
            response => {
                if(response.status === 200){

                            let addresses = []
                            axios.get(`http://localhost:8080/find-address-byuser/${currentUser.idUser}`)
                                .then(response => {
                                    successMessage("endereço deletado com sucesso")
                                    return this.props.addToAddressesList(response.data)
                                }).catch(error => {
                                    console.log(error)
                                    return this.props.addToAddressesList([])
                                });
                }
            }
        )
    }

    handleRedirect = ({ history }) => {
        history.push('/select-address')
    }

    handleNewAddress = ({ history }) => {
        history.push('/dashboard/novo-endereco')
    }

    render() {
        const { cep, 
            state,
             city,
              district,
               street,
                number, 
                complement,
                 id,
                  history, 
                  addressSelected, 
                  isSelected,
                   setAddress
                    ,successMessage
                } = this.props;

        const address = {
            "idAddress": id,
            "cep": cep,
            "state": state,
            "city": city,
            "district": district,
            "street": street,
            "number": number,
            "idUser": null
        }
        return (
            <div className="info-holder box-border">
                        <CustomButton
                            type="submit"
                            className="delete-button"
                            handleClick={() => {
                                successMessage('Endereço de entrega foi mudado com sucesso')
                                setAddress(address)}}
                                 >
                            usar para entregas
                        </CustomButton>
                <div className="rua">
                    <div className="card-address-break-apart">
                        <p>{street}</p>
                    </div>
                </div>
                <div className="address-info">
                    <div className="address-state-city-cep">
                        <p>{state},</p>
                        <p>{city}</p>
                        <p>- {cep}</p>
                    </div>
                    <div className="address-state-city-cep">
                        <p>{district}</p>
                        <p>- {number}</p>
                        {complement !== "" ? (
                            <p>, {complement}</p>
                        ) : ""}
                    </div>
                </div>
                <div className="line-break-left">
                    
                <CustomButton
                        
                        className="edit-button"
                        //handleClick={this.handleEdit.bind(this)} 
                        
                        handleClick={(e) => {
                            this.state.displayForms
                                ? this.setState(
                                    {
                                        displayNewField: {
                                            height: "0", width: '100%'
                                        }
                                    }, () => {
                                        this.setState({ displayForms: !this.state.displayForms })
                                    })
                                : this.setState(
                                    {
                                        displayNewField: {
                                            height: "750px", width: '100%'
                                        }
                                    }, () => {
                                        this.setState({ displayForms: !this.state.displayForms })
                                    })
                        }} >
                        editar
                    </CustomButton>

                    <CustomButton
                        type="submit"
                        className="delete-button"
                        handleClick={this.handleDelete.bind(this)} >
                        excluir
                    </CustomButton>
                </div>
                <div className="give-small-space"></div>
                <div style={this.state.displayNewField} className="newAddress">
                        <FormGroup>

                            <FormInputSmall
                                name="cep"
                                type="text"
                                value={this.state.cep}
                                handleChange={this.handleCepChange}
                                label='cep'
                                size="input-small"
                                required />

                            <FormInputSmall
                                name="street"
                                type="text"
                                value={this.state.street}
                                handleChange={this.handleChange}
                                label='Rua'

                                required />

                            <FormInputSmall
                                name="district"
                                type="text"
                                value={this.state.district}
                                handleChange={this.handleChange}
                                label='Bairro'
                                size="input-small"
                                required />

                            <FormInputSmall
                                name="state"
                                type="text"
                                value={this.state.state}
                                handleChange={this.handleChange}
                                label='Estado'
                                size="input-small"
                                required />

                            <FormInputSmall
                                name="complement"
                                type="text"
                                value={this.state.city}
                                handleChange={this.handleChange}
                                label='cidade'

                                required />

                            <FormInputSmall
                                name="number"
                                type="text"
                                value={this.state.number}
                                handleChange={this.handleChange}
                                label='numero casa'
                                size="input-small"
                                required />


                            <FormInputSmall
                                name="complement"
                                type="text"
                                value={this.state.complement}
                                handleChange={this.handleChange}
                                label='complemento'
                                _class="create_address_input"
                            />
                        </FormGroup>
                        <CustomButton
                        type="submit"
                        className="edit-button"
                        handleClick={this.handleEdit.bind(this)} >
                        aceitar mudanças
                    </CustomButton>
                        
                    </div>

                    

                
            </div >
        );
    }
}

const mapStateToProps = state => ({
    addressSelected: state.address.addressSelected,
    currentUser : state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setAddress: address => dispatch(addressSelected(address)),
    successMessage: message => dispatch(successMessage(message)),
    errorMessage: message => dispatch(errorMessage(message)),
    addToAddressesList: address => dispatch(addAddress(address)),
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardAddress));
