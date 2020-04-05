import React from 'react';
import axios from 'axios';

import './card-selected-address.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addressSelected } from '../../redux/address/address.actions';

class SelectedCardAddress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            endereco: {}
        }
    }

    componentDidMount = () => {
        const { addressSelected } = this.props;
        if (addressSelected !== null) {
            this.setState({
                endereco: addressSelected
            })
        }
    }


    handleRedirect = ({ history }) => {
        history.push('/select-address')
    }

    handleNewAddress = ({ history }) => {
        history.push('/dashboard/novo-endereco')
    }

    render() {
        const { addressSelected, history } = this.props;

        const { id, cep, state, city, district, street, number, complement } = this.state.endereco;
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
        console.log(addressSelected)
        return (
            <div className="info-holder-selected box-border">
                {
                    addressSelected === null ? (
                        <div className="address-info">
                            <div className="address-state-city-cep">
                                <span className="ops-no-address">
                                    Ops! parece que você ainda não tem nenhum endereço cadastrado!
                                    </span>
                            </div>
                            <div className="btn-selected">
                                <CustomButton
                                    type="submit"
                                    className="create-button"
                                    onClick={() => history.push('/dashboard/novo-endereco')} >
                                    cadastrar um novo endereço
                                    </CustomButton>
                            </div>
                        </div>
                    ) : (
                            addressSelected === null ? (
                                ""
                            ) : (
                                    <>
                                        <div className="rua">
                                            <p>{addressSelected.street}</p>
                                        </div>
                                        <div className="address-info">
                                            <div className="address-state-city-cep">
                                                <p>{addressSelected.state},</p>
                                                <p>{addressSelected.city}</p>
                                                <p>- {addressSelected.cep}</p>
                                            </div>
                                            <div className="address-state-city-cep">
                                                <p>{addressSelected.district}</p>
                                                <p>- {addressSelected.number}</p>
                                                {addressSelected.complement === "" ? (
                                                    <p>, {addressSelected.complement}</p>

                                                ) : ""}

                                            </div>
                                            {
                                                history.location.pathname === "/carrinho/checkout" ? (
                                                    <div className="btn-selected">
                                                        <CustomButton
                                                            type="submit"
                                                            className="create-button"
                                                            onClick={() => history.push('/dashboard/novo-endereco')} >
                                                            usar outro endereço
                                                        </CustomButton>
                                                    </div>
                                                ) : ("")
                                            }
                                        </div>
                                    </>
                                )

                        )
                }

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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectedCardAddress));
