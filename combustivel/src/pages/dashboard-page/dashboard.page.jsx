import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
//Link

import CustomButton from '../../components/custom-button/custom-button.component';
import CardAddress from '../../components/card-address/cardAddress.component';
import SelectedCardAddress from '../../components/card-selected-address/card-selected-address.component';
import CardPurchases from '../../components/card-purchases/cardPurchases.component';
//import CardsGrid from './cards-grid/cards-grid.component'

import './dashboard.styles.scss';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Alert from 'react-bootstrap/Alert'
import { connect } from 'react-redux';

//faUserCircle,
class DashboardPage extends Component {
    constructor(props) {
        super(props);
        //console.log(props)
        const currentUser = sessionStorage.getItem('user');
        if (!currentUser)
            this.props.history.push('/');

        this.state = {
            user: {},
            email: sessionStorage.getItem('email'),
            endereco: [],
            compras: [],
            active: "myAccount",
            errorMessage: ""
        }

        this.handleUserInformation = this.handleUserInformation.bind(this);

    }

    handleUserInformation = async () => {
        const { email } = this.state;
        await axios.get('http://localhost:8080/find-user-email/' + email)
            .then(response => {
                this.setState({
                    user: {
                        "idUser": response.data[0].idUser,
                        "email": response.data[0].email.toLowerCase(),
                        "password": response.data[0].password,
                        "firstName": response.data[0].firstName,
                        "lastName": response.data[0].lastName,
                        "cpf": response.data[0].cpf,
                        "gender": response.data[0].gender,
                        "phone": response.data[0].phone,
                        "birth": response.data[0].birth.split('-').reverse().toString().split(",", 2).concat(response.data[0].birth.split("-", 1)).join('-')
                    }
                })
            }).catch(error => {
                console.log(error)
            });

        await axios.get(`http://localhost:8080/find-address-byuser/${this.state.user.idUser}`)
            .then(response => {
                if (response.data) {
                    typeof response.data === "string" ? this.setState({ errorMessage: "ops! você ainda não tem nenhum endereço cadastrado." }) :
                        this.setState({ endereco: response.data })
                }
            }).catch(error => {
                console.log(error)
            });

        await axios.get(`http://localhost:8080/find-orders-byuser/${this.state.user.idUser}`)
            .then(response => {
                if (response.data) {
                    typeof response.data === "string" ? this.setState({ errorMessage: "nenhuma compra realizada ainda" }) :
                        this.setState({ compras: response.data })
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

    handleAccount = (e) => {
        this.setState({ active: "myAccount" });
    }
    handleCompra = (e) => {
        this.setState({ active: "compras" });
    }

    render() {
        const { endereco, compras, user } = this.state;
        const props = this.props;
        const MyComponents = { // cria componetização dinamica na pagina por um objeto, assim não é necessario criar callbacks no jsx
            Adressess: function showAddresses() {
                return endereco.map(elm => {
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

        const { selectedAddress } = this.props;
        const { birth } = this.state.user;
        return (
            <div className="dashboard-container">
                <Container className="inner-container">

                    {/* INICIO box de seleção de display */}
                    <div className="user-container">
                        <div className="user-profile">
                            <div className="u-show" name="active" value="myAccount" onClick={this.handleAccount}>
                                <div className="u-icon-holder"><FontAwesomeIcon icon={faInfoCircle} className="icon-userCircle" /></div>
                                <div className="u-text-container">
                                    <h2 className="u-title">Minha conta</h2>
                                    <span className="u-hello-user" >Olá, {sessionStorage.getItem('user')}</span>
                                </div>
                            </div>
                            <div className="u-show" name="active" value="compras" onClick={this.handleCompra}>
                                <div className="u-icon-holder"><FontAwesomeIcon icon={faShoppingBag} className="icon-userCircle" /></div>
                                <span className="u-title-one" >Minhas compras</span>
                            </div>
                        </div>
                    </div>
                    {/*FIM box de seleção de display */}


                    <div className="dashboard-content-holder">
                        {
                            this.state.active === "myAccount" ? (
                                <>
                                    <h5 className="dashboard-title">Minha conta</h5>
                                    <div className="info-holder box-border">
                                        <div className="address-info">
                                            <div className="info-container">

                                                <p>{this.state.user.firstName} {this.state.user.lastName}</p>
                                                <p>{this.state.user.gender === "M" ? "Masculino" : "Feminino"}</p>
                                                <p>{this.state.user.email}</p>
                                                <p>{this.state.user.cpf}</p>
                                                <p>{this.state.user.phone}</p>
                                                <p>{birth}</p>
                                            </div>

                                        </div>

                                        <div className="info-container">
                                        </div>

                                        <div className="info-container">
                                        </div>

                                        <div className="info-container">
                                        </div>

                                        <div className="info-container">
                                        </div>

                                        <div className="info-container">
                                        </div>

                                        <div className="info-container">
                                        </div>

                                        <div className="line-break-left">
                                            <CustomButton
                                                type="submit"
                                                className="edit-button"
                                                onClick={this.handleUserEdit} >
                                                Editar
                                            </CustomButton>
                                        </div>
                                    </div>
                                    <div className="line-break">
                                        <h5 className="dashboard-title">endereço de entrega</h5>
                                    </div>

                                    <SelectedCardAddress />

                                    <div className="line-break">
                                        <h5 className="dashboard-title">Meus endereços</h5>
                                        <div className="flex-to-left">
                                            <Link to={`${this.props.match.url}/novo-endereco`}>
                                                <CustomButton
                                                    type="submit"
                                                    className="create-button">
                                                    + adicionar novo
                                                </CustomButton>
                                            </Link>
                                        </div>
                                    </div>
                                    <span>{this.state.endereco.length} endereços cadastrados</span>
                                    {this.state.errorMessage ? (<Alert className="m-4" variant='primary'>{this.state.errorMessage}</Alert>) : ""}
                                    <MyComponents.Adressess />
                                </>
                            ) : (
                                    <>
                                        <h5 className="dashboard-title">Minhas compras</h5>
                                        <div className="info-holder center box-border">
                                            <MyComponents.Compras />
                                        </div>
                                    </>
                                )
                        }

                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedAddress: state.address.addressSelected
});

export default withRouter(connect(mapStateToProps)(DashboardPage));