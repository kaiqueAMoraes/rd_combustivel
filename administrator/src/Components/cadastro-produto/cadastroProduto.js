import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom';

import "./cadastroProduto.css";
import Header from '../../Components/Header/header';


class cadastroProduto extends Component {

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    constructor(props) {
        super(props);


        this.state = {
            "NameProduto": "",
            "description": "",
            "idCategory": "",
            "valordoproduto": "",
            "quantidade": "",

        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
        console.log(name + " : " + value)
    }

    mySubmitHandler = async e => {
        e.preventDefault();

        const { NameProduto, description, idCategory, valordoproduto, quantidade } = this.state;

        const produto = {
            "name": NameProduto,
            "description": description,
            "id_category": idCategory,
            "price": valordoproduto,
            "quantStock": quantidade
        }

        try {
            await axios.post("http://localhost:8080/create-product", produto)
                .then((response) => {
                    console.log(response)
                })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <>
                <Header />
                <main id="main-produto" className="main-produto">
                    <div className="container-form-cadastro">

                        <div className="container titulo">
                            <h3>Cadastro de Produtos</h3>
                        </div>

                        <form onSubmit={this.mySubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="ds_name">Nome do produto</label>
                                <input type="text" className="form-control" id="nomeProduto" name="NameProduto" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ds_description">Descrição</label>
                                <input type="text" className="form-control" id="descricaoProduto" name="description" onChange={this.handleChange} />
                            </div>
                            <label className="category-block"> Categoria:</label>
                            <div className="form-group-category">
                                <div>
                                    <input htmlFor="id_category" type="radio" id="gasolina" name="idCategory" value="1" onChange={this.handleChange}  />
                                    <label for="gasolina">Gasolina</label>
                                </div>
                                <div>
                                    <input htmlFor="id_category" type="radio" id="etanol" name="idCategory" value="2" onChange={this.handleChange}  />
                                    <label for="etanol">Etanol</label>
                                </div>
                                <div>
                                    <input htmlFor="id_category" type="radio" id="oleo" name="idCategory" value="3" onChange={this.handleChange}  />
                                    <label for="oleo">Óleo</label>
                                </div>
                                <div>
                                    <input htmlFor="id_category" type="radio" id="fluidos" name="idCategory" value="4" onChange={this.handleChange} />
                                    <label for="fluidos">Fluidos para motor</label>
                                </div>

                            </div>
                            <div className="form-group">
                                <label htmlFor="vl_price">Preço do litro</label>
                                <input type="text" className="form-control" id="valorLitroProduto" name="valordoproduto" onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="quantStock">Quantidade (em litros)</label>
                                <input type="text" className="form-control" id="quantidade" name="quantidade" onChange={this.handleChange} />
                            </div>
                            <button id="editar" className="buttons" onClick={this.mySubmitHandler}>Cadastrar</button>
                        </form>
                    </div>
                </main>
            </>
        );
    }


}

export default withRouter(cadastroProduto);