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

          this.state = {
               produto: produto
          }
     }

     render() {
          const { name, id, image, price, description } = this.state.produto;
          const { ADD_ITEM, history} = this.props;
          const item = this.state.produto;


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
                                        <h3 className="price">{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(price)}</h3>
                                        <span></span>
                                   </div>
                                   <br /><br />
                                   <hr />
                                   <br /><br />

                                   <div id="botao " />
                                   <Button id="botao" color="success" onClick={() => {
                                        ADD_ITEM(item)
                                        history.push('/carrinho')
                                   }}>Adicionar ao carrinho</Button>{' '}
                              </div>

                              {/*parte final da compra*/}
                         </form>
                    </Container>
               </>
          )
     }
}

const mapDispatchToProps = dispatch => ({
     ADD_ITEM: item => dispatch(addItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(Product));