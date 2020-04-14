import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartIn, toggleCartOff } from '../../redux/cart/cart.actions';
import Animations from '../../animations/animation_controller';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

class CartDropdown extends React.Component {
    constructor(props) {
        super(props);
        const {hidden} = this.props;
        alert(hidden)
        this.state = {
            hidden: hidden,
            fade_animation: {
                none: "",
            },
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
        
        if (hidden === "not_hidden") {
            this.setState({
                fade_animation: Animations.FADE_IN_FROM_LEFT()
            })
        }
    }


    render() {
        const { cartItems, history, hide_cart,bring_cart, hidden} = this.props;
        return (
            <div className="quase-mata-meu-coracao" style={this.state.fade_animation}>

            <div className="cart-dropdown">
                <div className="close-cart"
                    onClick={() => {
                            hide_cart()
                            return Animations.DELAY_CONTROLLER(
                                () => {  },
                                () => {
                                    this.setState({
                                        fade_animation: Animations.FADE_OFF_FROM_LEFT()
                                    })
                                },
                                2500
                            )
                        
                    }}
                    >>>
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
                    <span className="cart-price-text">preço total {hidden.toString()}</span>
                        <span className="cart-price-amount">
                            {
                                Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(123.32)
                            }
                        </span>
                    </div>
                    <div className="go-to-checkout"
                        onClick={() => {
                            //history.push('/carrinho')
                        }}>
                        <div className="card-bank">
                            <span className="bankName">bankCard</span>
                            <span className="bankNum">**** 5858</span>
                            <div className="card-square"></div>
                        </div>
                        <span className="span-finalizar-compra-carrinho">finalizar compra</span></div>
                </div>
            </div>
</div>
        )
    };
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state),
    hidden : state.cart.hidden
});

const mapDispatchToProps = dispatch => ({
    bring_cart: () => dispatch(toggleCartIn()),
    hide_cart: () => dispatch(toggleCartOff())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));