import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import Animations from '../../animations/animation_controller';
import SelectedCardAddress from '../../components/card-selected-address/card-selected-address.component';
import {isHidden,  selectAllAddresses, mapSelectedAddress } from '../../redux/address/address.selector';

import './address-card-slide.styles.scss'

class AddressSlider extends Component {
    constructor(props){
        super(props);

        this.state = {
            fade_animation : {
                none : ""
            },
        }
    }

    componentDidMount = () => {
        if (!this.props.hidden) {
            //this.props.hide_cart()
        }
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.hidden !== prevProps.hidden) {
            //return (this.handleFadeIn)()
        }
    }

    handleFadeIn = () => {
        const { hidden } = this.props;

        if (!hidden) {
            return this.setState({
                fade_animation: Animations.FADE_IN_FROM_LEFT()
            })
        }
    }

    
    render(){
        return(
            <div className="slider-address-container"
            style={this.state.fade_animation}>
            <div className="cart-dropdown">
                    <div className="close-cart"
                        onClick={() => {
                            //hide_cart()
                            return Animations.DELAY_CONTROLLER(
                                () => { alert("running dsa")},
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
                    <div className="address-slide-content-container">
                    <SelectedCardAddress />
                    </div>


                    </div>
            </div>
        )
    }
}



const mapStateToProps = createStructuredSelector({
    hidden: isHidden,
    addresses: selectAllAddresses,
    addressSelected: mapSelectedAddress
});

export default withRouter(
    connect(
        mapStateToProps,
    )
        (AddressSlider)
);