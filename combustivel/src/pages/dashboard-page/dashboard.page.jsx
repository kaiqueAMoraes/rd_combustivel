import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
//Link

import CustomButton from '../../components/custom-button/custom-button.component';
import CardAddress from '../../components/card-address/cardAddress.component';
import CardPurchases from '../../components/card-purchases/cardPurchases.component';
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
        console.log(props)
        const currentUser = sessionStorage.getItem('user');
        if (!currentUser)
            this.props.history.push('/');

        this.state = {
            user: {},
            email: sessionStorage.getItem('email'),
            endereco: [],
            compras: [
                {
                    "idOrder": 1,
                    "totalPrice": 150.0,
                    "date": "1995-08-05T00:00:00.000+0000",
                    "idUser": {
                        "idUser": 1,
                        "firstName": "Paul",
                        "lastName": "McCartney",
                        "cpf": "398.588.321-05",
                        "email": "paul_mccartney@gmail.com",
                        "password": "123456",
                        "birth": "1995-08-05T03:00:00.000+0000",
                        "gender": "Masculino",
                        "phone": "(11) 92344-4562"
                    },
                    "idAddress": {
                        "idAddress": 1,
                        "cep": "04502003",
                        "state": "SP",
                        "city": "Sao Paulo",
                        "district": "Morumbi",
                        "street": "Avenida Giovani Gronchi",
                        "number": "2053",
                        "complement": null,
                        "idUser": {
                            "idUser": 1,
                            "firstName": "Paul",
                            "lastName": "McCartney",
                            "cpf": "398.588.321-05",
                            "email": "paul_mccartney@gmail.com",
                            "password": "123456",
                            "birth": "1995-08-05T03:00:00.000+0000",
                            "gender": "Masculino",
                            "phone": "(11) 92344-4562"
                        }
                    },
                    "list": [
                        {
                            "idOrderItem": 1,
                            "idProduct": {
                                "idProduct": 1,
                                "name": "Gasolina Comum",
                                "description": "LOREM IPSUM LOREM IPSUM LOREM IPSUM",
                                "image": "imgURL",
                                "price": 3.52,
                                "quantStock": 1500,
                                "idCategory": {
                                    "idCategory": 1,
                                    "name": "Gasolina"
                                }
                            },
                            "price": 3.2,
                            "quantity": 50
                        },
                        {
                            "idOrderItem": 2,
                            "idProduct": {
                                "idProduct": 2,
                                "name": "Gasolina Aditivada",
                                "description": "LOREM IPSUM LOREM IPSUM LOREM IPSUM",
                                "image": "imgURL",
                                "price": 5.45,
                                "quantStock": 9000,
                                "idCategory": {
                                    "idCategory": 1,
                                    "name": "Gasolina"
                                }
                            },
                            "price": 3.2,
                            "quantity": 50
                        }
                    ]
                },
                {
                    "idOrder": 2,
                    "totalPrice": 150.0,
                    "date": "1995-08-05T00:00:00.000+0000",
                    "idUser": {
                        "idUser": 1,
                        "firstName": "Paul",
                        "lastName": "McCartney",
                        "cpf": "398.588.321-05",
                        "email": "paul_mccartney@gmail.com",
                        "password": "123456",
                        "birth": "1995-08-05T03:00:00.000+0000",
                        "gender": "Masculino",
                        "phone": "(11) 92344-4562"
                    },
                    "idAddress": {
                        "idAddress": 1,
                        "cep": "04502003",
                        "state": "SP",
                        "city": "Sao Paulo",
                        "district": "Morumbi",
                        "street": "Avenida Giovani Gronchi",
                        "number": "2053",
                        "complement": null,
                        "idUser": {
                            "idUser": 1,
                            "firstName": "Paul",
                            "lastName": "McCartney",
                            "cpf": "398.588.321-05",
                            "email": "paul_mccartney@gmail.com",
                            "password": "123456",
                            "birth": "1995-08-05T03:00:00.000+0000",
                            "gender": "Masculino",
                            "phone": "(11) 92344-4562"
                        }
                    },
                    "list": [
                        {
                            "idOrderItem": 1,
                            "idProduct": {
                                "idProduct": 1,
                                "name": "Gasolina Comum",
                                "description": "LOREM IPSUM LOREM IPSUM LOREM IPSUM",
                                "image": "imgURL",
                                "price": 3.52,
                                "quantStock": 1500,
                                "idCategory": {
                                    "idCategory": 1,
                                    "name": "Gasolina"
                                }
                            },
                            "price": 3.2,
                            "quantity": 50
                        },
                        {
                            "idOrderItem": 1,
                            "idProduct": {
                                "idProduct": 1,
                                "name": "Gasolina Comum",
                                "description": "LOREM IPSUM LOREM IPSUM LOREM IPSUM",
                                "image": "imgURL",
                                "price": 3.52,
                                "quantStock": 1500,
                                "idCategory": {
                                    "idCategory": 1,
                                    "name": "Gasolina"
                                }
                            },
                            "price": 3.2,
                            "quantity": 50
                        },
                        {
                            "idOrderItem": 1,
                            "idProduct": {
                                "idProduct": 1,
                                "name": "Gasolina Comum",
                                "description": "LOREM IPSUM LOREM IPSUM LOREM IPSUM",
                                "image": "imgURL",
                                "price": 3.52,
                                "quantStock": 1500,
                                "idCategory": {
                                    "idCategory": 1,
                                    "name": "Gasolina"
                                }
                            },
                            "price": 3.2,
                            "quantity": 50
                        },
                        {
                            "idOrderItem": 2,
                            "idProduct": {
                                "idProduct": 2,
                                "name": "Gasolina Aditivada",
                                "description": "LOREM IPSUM LOREM IPSUM LOREM IPSUM",
                                "image": "imgURL",
                                "price": 5.45,
                                "quantStock": 9000,
                                "idCategory": {
                                    "idCategory": 1,
                                    "name": "Gasolina"
                                }
                            },
                            "price": 3.2,
                            "quantity": 50
                        }
                    ]
                }
            ],
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
                        //birth.split('-').reverse().toString().split(",", 2).reverse().concat(birth.split("-",1)).join('-')
                    }
                })
            }).catch(error => {
                console.log(error)
            });

        await axios.get('http://localhost:8080/findall-address')
            .then(response => {
                console.log(response.data)
                if (response.data) {
                    this.setState({ endereco: response.data })
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
                console.log(compras)
                console.log(compras[0].list.length)
                return compras.map(elm => {
                    return <CardPurchases
                        key={elm.idOrder}
                        id={elm.idOrder}
                        datePurchase={elm.date}
                        qtdItems={elm.list.length}
                        vTotal={elm.totalPrice}
                        street={elm.idAddress.street}
                        number={elm.idAddress.number}
                        cep={elm.idAddress.cep}
                        props={props}
                    />

                })
            }

        }


        const { birth } = this.state.user;
        return (
            <div className="dashboard-container">
                <Container className="inner-container">
                    {this.state.errorMessage ? (<Alert className="m-4" variant='danger'>{this.state.errorMessage}</Alert>) : ""}

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
                                            <span>data nasc</span><p>{birth}</p>
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

export default withRouter(DashboardPage);