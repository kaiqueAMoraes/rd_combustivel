import React from 'react';
import axios from 'axios';

import './cardAddress.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { addressSelected, addAddress } from '../../redux/address/address.actions';
import { successMessage, errorMessage } from '../../redux/message/message.actions';

class CardAddress extends React.Component {
    constructor(props) {
        super(props)
    }

    handleEdit = () => {
        console.log(this.props)
        const { cep, state, city, district, street, number, complement, id, userId } = this.props;

        const address2 = {
            "idAdress": id,
            "cep": cep,
            "state": state,
            "city": city,
            "district": district,
            "street": street,
            "number": number,
            "complement": complement,
            "user": {
                "idUser": userId
            }
        }

        this.props.history.push('/dashboard/edit-endereco', { response: address2 });
    }

    handleDelete = async () => {
        const { cep, state, city, district, street, number, id, addToAddressesList, successMessage, currentUser} = this.props;

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
        console.log(address)

        await axios.put(`http://localhost:8080/update-address`, address).then(
            response => {
                if(response.status === 200){

                            let addresses = []
                            axios.get(`http://localhost:8080/find-address-byuser/${currentUser.idUser}`)
                                .then(response => {
                                    successMessage("endereço deletado com sucesso")
                                    return addToAddressesList(response.data)
                                }).catch(error => {
                                    console.log(error)
                                    return addToAddressesList([])
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
        const { cep, state, city, district, street, number, complement, id, history, addressSelected, isSelected, setAddress ,successMessage} = this.props;
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
                        type="submit"
                        className="edit-button"
                        handleClick={this.handleEdit.bind(this)} >
                        Editar
                    </CustomButton>
                    <CustomButton
                        type="submit"
                        className="delete-button"
                        handleClick={this.handleDelete.bind(this)} >
                        excluir
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
