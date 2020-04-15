import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal, isHidden } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartIn, toggleCartOff } from '../../redux/cart/cart.actions';
import Animations from '../../animations/animation_controller';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

class CartDropdown extends React.Component {
    constructor(props) {
        super(props);
        const { hidden } = this.props;

        this.state = {
            hidden: hidden,
            fade_animation: {
                none: "",
            },
        }
    }

    componentDidMount = () => {
        if (!this.props.hidden) {
            this.props.hide_cart()
        }
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.hidden !== prevProps.hidden) {
            return (this.handleFadeIn)()
        }
    }

    handleFadeIn = (e) => {
        //const { counter } = this.state;
        const { hidden } = this.props;

        if (!hidden) {
            return this.setState({
                fade_animation: Animations.FADE_IN_FROM_LEFT()
            })
        }
    }

    handleSubmit = async (items, history, total) => {
        const itemList = [];
        items.map(item => {
            itemList.push({ "idProduct": { "idProduct": item.id }, "quantity": item.quantity })
        })
        const orderInfo = {
            "itemList": itemList,
            "total": total
        }
        history.push("/carrinho/checkout", orderInfo);
    }

    render() {
        const { cartItems, history, hide_cart,total,  bring_cart, hidden } = this.props;

        return (
            <div className="quase-mata-meu-coracao" style={this.state.fade_animation}>

                <div className="cart-dropdown">
                    <div className="close-cart"
                        onClick={() => {
                            hide_cart()
                            return Animations.DELAY_CONTROLLER(
                                () => { },
                                () => {
                                    this.setState({
                                        fade_animation: Animations.FADE_OFF_FROM_LEFT()
                                    })
                                },
                                2500
                            )

                        }}>
                    x
                    </div>
                    <div className="cart-items">
                        {
                            cartItems.length ? cartItems.map(cartItem =>
                                <CartItem key={cartItem.id} item={cartItem}></CartItem>
                            ) : <span className="empty-message">Carrinho vazio :(</span>
                        }
                    </div>
                    <div className="cart-checkout">

                        <div className="cart-price-amount-container">
                            <span className="cart-price-text">preço total </span>
                            <span className="cart-price-amount">
                                {
                                    Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)
                                }
                            </span>
                        </div>

                        {
                            cartItems.length > 0
                                ? (
                                    <div className="go-to-checkout "
                                        onClick={() => {
                                            this.handleSubmit(cartItems, history, total)

                                        }}>
                                        <div className="card-bank">
                                            <span className="bankName">bankCard</span>
                                            <span className="bankNum">**** 5858</span>
                                            <div className="card-square"></div>
                                        </div>
                                        <span className="span-finalizar-compra-carrinho">finalizar compra</span></div>
                                )
                                : (
                                    <div className="go-to-checkout not-validated-for-purchase">
                                        <div className="card-bank not-validated-for-purchase">
                                            <span className="bankName">bankCard</span>
                                            <span className="bankNum">**** 5858</span>
                                            <div className="card-square"></div>
                                        </div>
                                        <span className="span-finalizar-compra-carrinho">finalizar compra</span></div>
                                )
                        }
                    </div>
                </div>
            </div>
        )
    };
}

const mapStateToProps = createStructuredSelector({
    hidden: isHidden,
    cartItems: selectCartItems,
    total: selectCartTotal,
});

const mapDispatchToProps = dispatch => ({
    bring_cart: () => dispatch(toggleCartIn()),
    hide_cart: () => dispatch(toggleCartOff())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));