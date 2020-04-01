import React, { Component } from 'react';
import axios from 'axios'
import { withRouter} from 'react-router-dom';

import "./styles.css";

class Fomularioproduto extends Component {

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    constructor(props) {
        super(props);

     
        this.state = {
            "NameProduto" : "",
            "description" : "",
            "valordoproduto" : "",
            "quantidade" : "",
            
        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
        console.log(name + " : " + value)
    }

    mySubmitHandler = async e => {
        e.preventDefault();

        const { NameProduto, description, valordoproduto, quantidade } = this.state;

            const produto    = {
                "name": NameProduto,
                "description": description,
                "price": valordoproduto,
                "quantStock": quantidade
            }
      
            try {
                await axios.post("http://localhost:8080/create-product", produto)
            .then((response)=>{
                  console.log(response)})
            } catch (error) {
                console.log(error)
            }
    } 
                    
    render() {
        return (
            <main id="main-produto" className="main-produto">
                {/* Cabeçalho do formulário */}

                {/* Formulário de Cadastro */}
                <div className="container form">

                    <header className="container titulo">
                        <h2>Cadastro de Produtos</h2>
                    </header>
                    {/* Cabeçalho do formulário  (FIM) */}
                    <form onSubmit={this.mySubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="ds_name">Nome do produto</label>
                        <input type="text" className="form-control" id="nomeProduto" name="NameProduto" onChange={this.handleChange}/>
                    </div>
                    </form>

                    <div className="form-group">
                        <label htmlFor="ds_description">Descrição</label>
                        <input type="text" className="form-control" id="descricaoProduto" name="description" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="vl_price" >Valor do Litro</label>
                        <input type="text" className="form-control" id="valorLitroProduto" name="valordoproduto" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="quantStock">Quantidade (Em Litros)</label>
                        <input type="text" className="form-control" id="quantidade" name="quantidade" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-success" style={{ marginBottom: '10px' }} onClick={this.mySubmitHandler}>Cadastrar</button>
                </div>
                
                {/* Formulário de Cadastro (FIM) */}
            </main>
        );
    }


}

export default withRouter(Fomularioproduto);
