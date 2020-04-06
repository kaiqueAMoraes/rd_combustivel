import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux'

import '../grid-produto/new-grid-product.css';

import {
     Container, Button, Row, Col,
} from 'reactstrap';


class Product extends Component {

     constructor(props) {
          super(props);

          const produto = props.history.location.state.response

          console.log(produto);

          this.state = {
               produto: produto
          }
     }

     render() {
          const { name, id, image, price, description, addItem } = this.state.produto;
          const item = this.state.prod;

          console.log(this.state.prod)
          console.log(this.state.produto);
          return (
               <>
                    <Container className="telaProduto ">
                         {/*parte inicio produto e descrição*/}
                         <form id="produto" className="row ">

                              <div className="card col-md-7">
                                   <div>
                                        <Row className="card-compra" >
                                             <h2 className="name">{name}</h2>
                                             <div className="block-2">
                                                  <img src={image} alt="" />
                                                  <p className="block-description">{description}</p>
                                             </div>
                                        </Row>
                                   </div>
                              </div>

                              {/*parte final produto e descrição*/}
                              <div id="teste" className=""></div> {/*" col-md-1" em classname para ocupar uma colna */}

                              {/*parte de compra*/}
                              <div id="compra" className="card card-price col-md-4">

                                   <br /><br />
                                   <div className="price-container">
                                        <h3 className="price">R$ {price}</h3>
                                        <span>preço por litro</span>
                                   </div>
                                   <br /><br />
                                   <hr />
                                   <br /><br />

                                   <div id="botao " />
                                   <Button id="botao" color="success" onClick={() => addItem(item)}>Adicionar ao carrinho</Button>{' '}
                              </div>

                              {/*parte final da compra*/}
                         </form>
                    </Container>
               </>
          )
     }
}

const mapDispatchToProps = dispatch => ({
     addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(withRouter(Product));