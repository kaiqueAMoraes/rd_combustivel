import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
//Link

import CustomButton from '../../components/custom-button/custom-button.component';
import CardAddress from '../../components/card-address/cardAddress.component'
//import CardsGrid from './cards-grid/cards-grid.component'

import './dashboard.styles.scss';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import Alert from 'react-bootstrap/Alert'

//faUserCircle,
class DashboardPage extends Component {
    constructor(props) {
        super(props);

        const currentUser = sessionStorage.getItem('user');
        if (!currentUser)
            this.props.history.push('/');

        this.state = {
            user: {},
            email: sessionStorage.getItem('email'),
            endereco: [],
            produtos: [],
            active: "",
            errorMessage : ""
        }

        this.handleUserInformation = this.handleUserInformation.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleUserInformation = async () => {
        const { email } = this.state;
        await axios.get('http://localhost:8080/find-user-email/' + email)
            .then(response => {
                this.setState({ user: response.data[0] })
            }).catch(error => {
                console.log(error)
            });

        await axios.get('http://localhost:8080/findall-address')
            .then(response => {
                this.setState({ endereco: response.data })
            }).catch(error => {
                console.log(error)
            });
    }

    componentDidMount = () => {
        this.handleUserInformation();
    }

    handleChange = () => { }

    render() {
        const { endereco, produtos } = this.state;
        console.log(endereco)
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
                    />
                })
            },
            Produtos: function showPurchases() {
                //return endereco.map(elm => {
                //retorna componente quando tiver pronto
                ///>
            }
        }


        return (

            <div className="dashboard-container">
                <Container className="inner-container">
                {this.state.errorMessage ? (<Alert className="m-4" variant='danger'>{this.state.errorMessage}</Alert>) : ""}

                    {/* INICIO box de seleção de display */}
                    <div className="user-container">
                        <div className="user-profile">
                            <div className="u-show" onClick={this.handleUserInformation}>
                                <div className="u-icon-holder"><FontAwesomeIcon icon={faInfoCircle} className="icon-userCircle" /></div>
                                <div className="u-text-container">
                                    <h2 className="u-title">Minha conta</h2>
                                    <span className="u-hello-user" >Olá, {sessionStorage.getItem('user')}</span>
                                </div>
                            </div>
                            <div className="u-show" onClick={this.handleChange}>
                                <div className="u-icon-holder"><FontAwesomeIcon icon={faShoppingBag} className="icon-userCircle" /></div>
                                <span className="u-title-one" >Minhas compras</span>
                            </div>
                        </div>
                    </div>
                    {/*FIM box de seleção de display */}


                    <div className="dashboard-content-holder">
                        <h5>Minha conta</h5>
                        <div className="info-holder box-border">
                            <div className="info-container">
                                <span>nome</span><p>{this.state.user.firstName}</p>
                            </div>

                            <div className="info-container">
                                <span>sobrenome</span><p>{this.state.user.lastName}</p>
                            </div>

                            <div className="info-container">
                                <span>sexo</span><p>{this.state.user.gender === "M" ? "Masculino" : "Feminino"}</p>
                            </div>

                            <div className="info-container">
                                <span>email</span><p>{this.state.user.email}</p>
                            </div>

                            <div className="info-container">
                                <span>cpf</span><p>{this.state.user.cpf}</p>
                            </div>

                            <div className="info-container">
                                <span>tel</span><p>{this.state.user.phone}</p>
                            </div>

                            <div className="info-container">
                                <span>data nasc</span><p>{this.state.user.birth}</p>
                            </div>

                            <div className="line-break-left">
                                <CustomButton
                                    type="submit"
                                    className="edit-button"
                                    onClick={this.handleSubmit} >
                                    Editar
                        </CustomButton>
                            </div>
                        </div>

                        <div className="line-break">
                            <h5>Meus endereços</h5>

                            <div className="flex-to-left">
                                <Link to={`${this.props.match.url}/novo-endereco`}>
                                    <CustomButton
                                        type="submit"
                                        className="create-button"
                                        onClick={this.handleSubmit} >
                                        adicionar novo
                                </CustomButton>
                                </Link>
                            </div>
                        </div>

                        <MyComponents.Adressess />

                    </div>
                </Container>
            </div>
        )
    }
}

export default withRouter(DashboardPage);