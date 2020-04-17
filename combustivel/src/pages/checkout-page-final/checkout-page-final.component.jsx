import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import "./checkout-page-final.styless.scss"
import CardAddress from "../../components/card-address/cardAddress.component"
import SelectedCardAddress from '../../components/card-selected-address/card-selected-address.component';

import Container from 'react-bootstrap/Container';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from 'react-bootstrap/Spinner';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import { resetCart } from '../../redux/cart/cart.actions';
import FormInput from './form-input/form-input.componets';

class CheckoutPageFinal extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props.history.location.state)

        this.state = {
            address: [],
            itemList: [],
            total: this.props.history.location.state.total,
            frete: 91.32,
            loading: false,
            idUser: "",
            ncartao: " ",
            CVV: " ",
            DATA: " ",
            nomeCartao: ""
        }
    }
    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value.toUpperCase() });
    }

    componentDidMount = async () => {
        const {idUser} = this.props.currentUser; 
        
        let userAddress = await axios.get(`http://localhost:8080/find-address-byuser/${idUser}`).then(response => { return response.data[0] })

        this.setState({
            itemList: this.props.history.location.state.itemList,
            address: userAddress,

        })
    }

    handleOrder = async () => {
        this.setState({ loading: true })
        const { address, itemList, total, frete } = this.state;
        const{idUser} = this.props.currentUser;
        const {addressSelected} = this.props;
        const totalPrice = total + frete
        const order =
        {
            "totalPrice": totalPrice,
            "idUser": {
                "idUser": idUser
            },
            "idAddress": {
                "idAddress": addressSelected.idAddress
            },
            "itemList": itemList
        }
        console.log(order)

        await axios.post("http://localhost:8080/create-order", order)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ loading: false })
                    return this.props.history.push("/carrinho/checkout/success-page")
                } else {
                    console.log(response.data)
                    //throw new Error(response.data);
                }
            })
    }

    render() {
        const { total, itemList, frete, address, loading } = this.state;
        const { itemCount, addressSelected, currentUser, RESET_CART } = this.props

        return (
            <Container>
                <div className="checkout-content-holder">
                    <div className="checkout-a-content">
                        <h5>Endereço de entrega</h5>
                        <SelectedCardAddress/>
                    </div>
                    <div className="finalizar-compra">
                        <h5>Resumo da compra</h5>
                        <div className="content-finalizar-compra">
                            <div className="finalizar-compra-resumo-a">
                                <div className="address-resumo">
                                    <p className="p-title-resumo">Endereço escolhido</p>
                                    {
                                        addressSelected !== null ? (
                                            <div className="address-info">
                                                <p>{addressSelected.street}</p>
                                                <div className="address-state-city-cep">
                                                    <p>{addressSelected.state},</p>
                                                    <p>{addressSelected.city}</p>
                                                    <p>- {addressSelected.cep}</p>
                                                </div>
                                                <div className="address-state-city-cep">
                                                    <p>{addressSelected.district}</p>
                                                    <p>- {addressSelected.number}</p>
                                                    {addressSelected.complement !== "" ? (
                                                        <p>, {addressSelected.complement}</p>
                                                    ) : ""}
                                                </div>
                                                <p className="p-title-resumo">Destinatario </p>
                                                <span>{localStorage.getItem("user")}</span>
                                            </div>
                                        ) : (
                                                <div className="address-info">
                                                    <p>Endereço não incluido ainda</p>
                                                </div>
                                            )
                                    }
                                </div>
                                <div className="total-resumo">
                                    <p className="p-title-resumo">Resumo do pedido</p>
                                    <div className="total-resumo-a">
                                        <div className="a-qtd-items-e-total">
                                            <span>{itemCount > 1 ? (`${itemCount} produtos`) : (`${itemCount} produto`)} </span><p>
                                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}
                                            </p>
                                        </div>
                                        <div className="a-qtd-items-e-total">
                                            <span>frete</span><p>
                                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(frete)}
                                            </p>
                                        </div>
                                        <span className="frete-info">* o frete é gerado de acordo com o cep do endereço escolhido</span>
                                    </div>
                                    <div className="total-resumo-b">
                                        <span>total</span><p>
                                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(frete + total)}
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="to-the-left">
                            </div>
                            <p className="p-title-resumo">Cartão de pagamento</p>
                            <div className="pagamento-cartao-holder">
                                <div className="cartao">
                                    <FormInput
                                        name="nomeCartao"
                                        type="text"
                                        label="Nome"

                                        size="input-m"
                                        value={this.state.nomeCartao.toUpperCase()}
                                        handleChange={this.handleChange}
                                        required />
                                    <FormInput
                                        name="ncartao"
                                        type="text"
                                        label="numero do cartão"
                                        mask="9999.9999.9999.9999"
                                        size="input-m"
                                        value={this.state.ncartao}
                                        handleChange={this.handleChange}
                                        required />


                                    <div className="cartao-flex-collumn">
                                        <FormInput
                                            size="input-cvv"
                                            name="CVV"
                                            type="text"
                                            label="CVV"
                                            mask="999"
                                            value={this.state.CVV}
                                            handleChange={this.handleChange}
                                            required />
                                        <FormInput

                                            name="DATA"
                                            type="text"
                                            label="data"
                                            mask="99.99"
                                            size="input-cvv"
                                            value={this.state.DATA}
                                            handleChange={this.handleChange}
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <div className="address-info">
                                    <p className="p-title-resumo">informações do cartão</p>
                                        
                                        <div className="address-state-city-cep">
                                            <p>nome : {this.state.nomeCartao}</p>
                                            <p>cartão : {this.state.ncartao}</p>
                                            <p>CVV : {this.state.CVV}</p>
                                            <p>data : {this.state.DATA}</p>
                                        </div>
                                    </div>
                                    {
                                        addressSelected && 
                                        this.state.nomeCartao.length > 15 &&
                                        this.state.ncartao.length > 10 &&
                                        this.state.DATA.length > 4 &&
                                            this.state.CVV.length > 2 ? (
                                            <CustomButton
                                                _class="create_button"
                                                handleClick={() => this.handleOrder()   }>
                                                finalizar compra
                                            </CustomButton>
                                        ) : ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }

}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state),
    addressSelected: state.address.addressSelected,
    currentUser : state.user.currentUser
});

export default withRouter(connect(mapStateToProps)(CheckoutPageFinal))