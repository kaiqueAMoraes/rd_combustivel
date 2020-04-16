import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';


import CustomButton from '../../components/custom-button/custom-button.component';
import CardAddress from '../../components/card-address/cardAddress.component';
import SelectedCardAddress from '../../components/card-selected-address/card-selected-address.component';


import './dashboard.styles.scss';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Alert from 'react-bootstrap/Alert'
import { connect } from 'react-redux';
import CardPurchases from '../../components/card-purchases/cardPurchases.component'
import UserCardDashboard from '../../components/user-card/user-card.component';
//import AddressSlider from '../../components/card-slide/address-card-slide.component';

class DashboardPage extends Component {
    constructor(props) {
        super(props);

        //if (!this.props.currentUser)
        //    this.props.history.push('/');

        this.state = {
            user: {},
            email: "",
            endereco: [],
            compras: [],
            errorMessage: ""
        }

        this.handleUserInformation = this.handleUserInformation.bind(this);

    }

    handleUserInformation = async () => {
        const { currentUser: { email, idUser } } = this.props;

        await axios.get(`http://localhost:8080/find-orders-byuser/${idUser}`)
            .then(response => {
                if (response.data) {
                    typeof response.data === "string"
                        ? this.setState({ errorMessage: "nenhuma compra realizada ainda" })
                        : this.setState({ compras: response.data })
                }
            }).catch(error => {
                console.log(error)
            });
    }

    handleUserEdit = () => {
        this.props.history.push('/dashboard/edit-usuario', { response: this.state.user });
    }

    componentDidMount = () => {
        this.handleUserInformation();
    }

    render() {
        const { endereco, compras, user } = this.state;
        const props = this.props;
        const { addresses } = this.props;
        const MyComponents = { // cria componetização dinamica na pagina por um objeto, assim não é necessario criar callbacks no jsx
            Adressess: function showAddresses() {
                return addresses.map(elm => {
                    return <CardAddress
                        cep={elm.cep}
                        street={elm.street}
                        city={elm.city}
                        district={elm.district}
                        number={elm.number}
                        complement={elm.complement}
                        state={elm.state}
                        key={elm.idAddress}
                        id={elm.idAddress}
                        userId={user.idUser}
                    />
                })
            },
            Compras: function showPurchases() {
                return compras.map(elm => {
                    console.log(elm)
                    return <CardPurchases
                        key={elm.idOrder}
                        elm={elm}
                        props={props} />

                })
            }

        }

        const { selectedAddress, history } = this.props;
        const { birth } = this.state.user;
        return (
            <div className="dashboard-container">
                <Container className="inner-container">
                    <div className="dashboard-content-holder">

                        <div>
                            <h5 className="dashboard-title">Minha conta</h5>
                            <UserCardDashboard />

                            <div>

                        <h5 className="dashboard-title">Minhas compras</h5>
                        <div className="info-holder center box-border">
                            <MyComponents.Compras />

                        </div>
</div>
                        </div>
                        <div>
                            <h5 className="dashboard-title">endereço de entrega</h5>
                            <SelectedCardAddress />
                        <span>{this.state.endereco.length} endereços cadastrados</span>
                        {this.state.errorMessage ? (<Alert className="m-4" variant='primary'>{this.state.errorMessage}</Alert>) : ""}
                        <MyComponents.Adressess />
                        </div>
                        


                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedAddress: state.address.addressSelected,
    currentUser: state.user.currentUser,
    addresses: state.address.addresses
});

export default withRouter(connect(mapStateToProps)(DashboardPage));