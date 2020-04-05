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
            idUser: ""
        }
    }


    componentDidMount = async () => {
        const email = sessionStorage.getItem('email');
        let userId = await axios.get('http://localhost:8080/find-user-email/' + email).then(response => { return response.data[0].idUser })
        let userAddress = await axios.get(`http://localhost:8080/find-address-byuser/${userId}`).then(response => { return response.data[0] })

        this.setState({
            itemList: this.props.history.location.state.itemList,
            address: userAddress,
            idUser: userId,
        })
    }

    handleOrder = async () => {
        this.setState({ loading: true })
        const { address, itemList, total, idUser } = this.state;
        const order =
        {
            "totalPrice": total,
            "idUser": {
                "idUser": idUser
            },
            "idAddress": {
                "idAddress": address.idAddress
            },
            "itemList": itemList
        }
        console.log(order)

        await axios.post("http://localhost:8080/create-order", order)
            .then(response => {
                if (response.status === 200) {
                    console.log("sucesso ao cadastrar produto")
                    this.setState({ loading: false })
                    this.props.history.push("/carrinho/checkout/success-page")
                } else {
                    console.log(response.data)
                    //throw new Error(response.data);
                }
            })
    }

    render() {
        const { total, itemList, frete, address, loading } = this.state;
        const { itemCount, addressSelected } = this.props
        //const { cep, street, city, district, number, complement, state, idAddress } = addressSelected;

        return (
            <Container>
                <div className="checkout-content-holder">
                    <div className="checkout-a-content">
                        <h5>Endereço de entrega</h5>
                        <SelectedCardAddress
                        />
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
                                                <span>{sessionStorage.getItem("user")}</span>
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
                               {
                                   addressSelected ?  (
                                    <CustomButton

                                    onClick={this.handleOrder}>
                                    finalizar compra
                                {loading ? <Spinner animation="grow" variant="light" /> : ""}
                                </CustomButton>
                                   ) : ""
                               }
                                

                            </div>
                            {/* <p className="p-title-resumo">Cartão de pagamento</p>
                            <div className="pagamento-cartao">
                            </div> */}
                        </div>
                    </div>
                </div>
            </Container>
        )
    }

}

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state),
    addressSelected: state.address.addressSelected
});

export default withRouter(connect(mapStateToProps)(CheckoutPageFinal))