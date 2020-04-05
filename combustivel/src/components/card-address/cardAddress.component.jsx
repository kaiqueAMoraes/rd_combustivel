import React from 'react';
import axios from 'axios';

import './cardAddress.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { connect } from 'react-redux';
import { addressSelected } from '../../redux/address/address.actions';

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
        const { cep, state, city, district, street, number, id} = this.props;

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
                    window.location.reload()
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
        const { cep, state, city, district, street, number, complement, id, history, addressSelected, isSelected, setAddress } = this.props;
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
                <div className="rua">
                    <div className="card-address-break-apart">
                        <p>{street}</p>
                        <CustomButton
                            type="submit"
                            className="delete-button"
                            onClick={() => setAddress(address)} >
                            usar para entregas
                        </CustomButton>
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
                        onClick={this.handleEdit.bind(this)} >
                        Editar
                    </CustomButton>
                    <CustomButton
                        type="submit"
                        className="delete-button"
                        onClick={this.handleDelete.bind(this)} >
                        excluir
                    </CustomButton>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    addressSelected: state.address.addressSelected
});

const mapDispatchToProps = dispatch => ({
    setAddress: address => dispatch(addressSelected(address))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardAddress));
