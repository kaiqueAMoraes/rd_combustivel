import React, { Component } from "react";
import '../grid-produto/grid-produto.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';

import {
    Container, Button, Row, Col
} from 'reactstrap';


class Product extends Component {

constructor(props){
    super(props);
    state = {
        
    }

    getProduct = async () => {
        const DataProduct = await axios("http://localhost:8080/find-product/" + id);

        this.setState({
            id: DataProduct.idProduct,
            name: DataProduct.name,
            description: DataProduct.description,
            image: DataProduct.image,
            price: DataProduct.price,
            quantStock: DataProduct.quantStock,
            idCategory: DataProduct.idCategory 
        })
    }
}

    // const Produto = (props) => {
    //     console.log(props);

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
                                        <p className="card-text descricao-produto">This is a wider card with supporting text below
                                        as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                            </p>
                                    </Col>
                                    <Col md="4" lg="4" className="adicionar-produto">
                                        <h1 className="card-text preco-produto">R$98,99</h1>
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