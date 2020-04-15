import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import Animations from '../../animations/animation_controller';

class AdressSlider extends Component {
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
            this.props.hide_cart()
        }
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.hidden !== prevProps.hidden) {
            return (this.handleFadeIn)()
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
            <h1>ok ok</h1>
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
        (AdressSlider)
);