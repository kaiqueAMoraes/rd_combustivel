import React from 'react';
import axios from 'axios';

import './card-selected-address.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addressSelected, setHidden, addAddress } from '../../redux/address/address.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import CreateNewAddress from '../create-address/create-address.components';

class SelectedCardAddress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            endereco: {},
            displayForms: false,
            displayNewField: {
                height: '0',
                width: '100%'
            }
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

    handleNewAddress = () => {
        //this.props.history.push('/dashboard/novo-endereco')

    }

    render() {
        const { addressSelected, history, setHidden } = this.props;
        const { displayForms } = this.state;

        return (
            <div className="info-holder-selected box-border address-info">
                <div
                    type="submit"
                    className="edit-button-address-card"
                    onClick={(e) => {
                        displayForms
                            ? this.setState(
                                {
                                    displayNewField: {
                                        height: "0", width: '100%'
                                    }
                                }, () => {
                                    this.setState({ displayForms: !displayForms })
                                })
                            : this.setState(
                                {
                                    displayNewField: {
                                        height: "750px", width: '100%'
                                    }
                                }, () => {
                                    this.setState({ displayForms: !displayForms })
                                })
                    }} >


                    <div className="div-address-edit-icon">
                        <FontAwesomeIcon icon={faAddressBook} className="icon-userEdit" />
                    </div>
                                    novo endereço
                                </div>
                {
                    addressSelected === null
                        ? (
                            <div >
                                <div className="address-container-info">
                                    <div className="address-state-city-cep">
                                        <span className="ops-no-address">
                                            Ops! parece que você ainda não tem nenhum endereço cadastrado!
                                    </span>
                                    </div>
                                        
                                </div>

                                
                            </div>
                        )
                        : (
                            addressSelected === null
                                ? ("")
                                : (
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
                                            <div
                                                type="submit"
                                                className="edit-button-user-card"
                                                onClick={(e) => {
                                                    setHidden()
                                                }} >
                                                <div className="div-user-edit-icon">
                                                    <FontAwesomeIcon icon={faAddressBook} className="icon-userEdit" />
                                                </div>
                                                usar outro endereço
                                            </div>
                                          
                                        </div>
                                        
                                    </>
                                )

                        )
                        
                }
<div style={this.state.displayNewField} className="newAddress">
                                    <CreateNewAddress />
                                </div>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    addressSelected: state.address.addressSelected
});

const mapDispatchToProps = dispatch => ({
    setAddress: address => dispatch(addressSelected(address)),
    setHidden: () => dispatch(setHidden()),
    addToAddressesList: address => dispatch(addAddress(address))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectedCardAddress));
