import React, { Component } from "react";
import '../grid-produto/grid-produto.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';

import {
    Container, Button, Row, Col
} from 'reactstrap';
import axios from 'axios';

class Product extends Component {

constructor(props){
    super(props);
    this.state = {
        id: "",
        name: "",
        description: "",
        image: "",
        price: "",
        quantStock: "",
        idCategory: ""
    }

    this.getProduct()
    
}
    getProduct = async () => {
        
        const {data:product} = await axios("http://localhost:8080/find-product/{id}");

        this.setState({
            id: product.idProduct,
            name: product.name,
            description: product.description,
            image: product.image,
            price: product.price,
            quantStock: product.quantStock,
            idCategory: product.idCategory 
        })
    }


    render() {
        return (
            <Container className="telaProduto">
                <Row className="d-flex justify-content-center">
                    <div className='card'>
                        <Row className="card-compra" >
                            <Col md="4" lg="4" className="icone-compra-produto">
                                <FontAwesomeIcon icon={faGasPump} className="iconGas fas fa-gas-pump card-icon-test" size="5x" />
                            </Col>
                            <Col md="8" lg="8" className="produto">
                                <div className="card-body">
                                    <Col md="4" lg="4">
                                        <h1 className="card-title nome-produto">{this.state.name}</h1>
                                        <p className="card-text descricao-produto">{this.state.description}</p>
                                    </Col>
                                    <Col md="4" lg="4" className="adicionar-produto">
                                        <h1 className="card-text preco-produto">{this.state.price}</h1>
                                        <div>por litro</div>
                                        <Button type="submit" color="success" className="btn-addCarrinho">Adicionar ao carrinho</Button>
                                        <br />
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default Product;