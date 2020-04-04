import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import "./checkout-page-final.styless.scss"
import CardAddress from "../../components/card-address/cardAddress.component"

import Container from 'react-bootstrap/Container';
import CustomButton from '../../components/custom-button/custom-button.component';
import Spinner from 'react-bootstrap/Spinner';



class CheckoutPageFinal extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props.history.location.state)

        this.state = {
            address: [],
            itemList: [],
            total: 0,
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
            total: this.props.history.location.state.total,
            address: userAddress,
            idUser : userId,

        })
    }

    handleOrder = async () => {
        this.setState({loading: true})
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
                    this.setState({loading: false})
                    this.props.history.push("/carrinho/checkout/success-page")
                } else {
                    console.log(response.data)
                    //throw new Error(response.data);
                }
            })
    }

    render() {
        const { total, itemList, frete, address ,loading} = this.state;

        const { cep, street, city, district, number, complement, state, idAddress } = address;


        return (
            <Container>
                <div className="checkout-content-holder">
                    <div className="checkout-a-content">
                        <h5>Endereço de entrega</h5>
                        <CardAddress
                            cep={cep}
                            street={street}
                            city={city}
                            district={district}
                            number={number}
                            complement={complement}
                            state={state}
                            key={idAddress}
                            id={idAddress}
                        //userId={user.idUser}
                        />
                    </div>
                    <div className="finalizar-compra">
                        <h5>Resumo da compra</h5>
                        <div className="content-finalizar-compra">
                            <div className="finalizar-compra-resumo-a">
                                <div className="address-resumo">
                                    <p className="p-title-resumo">Endereço escolhido</p>
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
                                        <p className="p-title-resumo">Destinatario </p>
                                        <span>{sessionStorage.getItem("user")}</span>
                                    </div>
                                </div>
                                <div className="total-resumo">
                                    <p className="p-title-resumo">Resumo do pedido</p>
                                    <div className="total-resumo-a">
                                        <div className="a-qtd-items-e-total">
                                            <span>{itemList.length > 1 ? (`${itemList.length} produtos`) : (`${itemList.length} produto`)} </span><p>
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
                            <CustomButton 
                                
                                onClick={this.handleOrder}>
                                finalizar compra
                                {loading ? <Spinner animation="grow" variant="light" /> : ""}
                            </CustomButton>

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
export default withRouter(CheckoutPageFinal)