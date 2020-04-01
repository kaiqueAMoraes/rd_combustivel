import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Link} from 'react-router-dom'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CustomButton from '../../components/custom-button/custom-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ScrollCards from '../../components/scroll-cards/scroll-cards.component';


import './checkout.styles.scss';

const handleSubmit = items => {
    console.log(items)
}

const CheckoutPage = ({ cartItems, total }) => (
    <>
        <Container>
        <h3>Talvez você goste</h3>
            
        <ScrollCards
                        label={"Os mais vendidos"}
                        produtos={`http://localhost:8080/find-all-products`}
                    />

            <h3>Minha cesta</h3>
            <Row>

                <div className="checkout-page">
                    <div className="checkout-header">
                        <div className="headerblock">
                            <span>Produto</span>
                        </div>
                        <div className="headerblock">
                            <span>Quantidade</span>
                        </div>
                        <div className="headerblock">
                            <span>Preço</span>
                        </div>
                        <div className="headerblock">
                            <span>Remover</span>
                        </div>
                    </div>
                    {
                        cartItems.map(cartItem =>
                            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                        )
                    }


                </div>
                <div className="total-holder">

                    <div className="cart-distress">
                        Resumo do pedido
                        <div>
                            <span>{cartItems.length} produtos</span>
                        </div>
                        <div className="total">
                            <span>TOTAL : ${total}</span>
                        </div>

                        <div className="btn-cart-holder d-flex justify-content-center">
                            <CustomButton onClick={() => handleSubmit(cartItems)}>finalizar</CustomButton>
                        </div>
                        <div className="btn-cart-holder d-flex justify-content-center">
                            <Link to="/">Continuar comprando</Link>
                        </div>
                    </div>
                </div>
            </Row>

            <h3>Talvez você goste</h3>
            
        <ScrollCards
                        label={"Os mais vendidos"}
                        produtos={`http://localhost:8080/find-all-products`}
                    />

<h3>Talvez você goste</h3>
            
            <ScrollCards
                            label={"Os mais vendidos"}
                            produtos={`http://localhost:8080/find-all-products`}
                        />
        </Container>
    </>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);