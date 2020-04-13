import React, { Component } from 'react';

import { connect } from 'react-redux';

import './message.styles.scss';
import Animations from "../../animations/animation_controller";
import { successMessage } from '../../redux/message/message.actions';

class Message extends Component {
    constructor(props) {
        super(props);
        const { message } = this.props;

        this.state = {
            message: "",
            fade_animation: {
                none: ""
            },
            messageToCard: message
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.message !== prevProps.message) {
            return (this.handleChange)()
        }
    }

    handleSameMessage = () => {
        this.setState({
            fade_animation: Animations.MESSAGE_GIGGLES()
        })
    }

    handleChange = (e) => {
        //const { counter } = this.state;
        const { message, setMessage } = this.props;

        if (message !== "") {
            Animations.DELAY_CONTROLLER(
                () => { setMessage("") },
                () => {
                    this.setState({
                        fade_animation: Animations.FADE_MESSAGE_IN()
                    })
                },
                2900
            )
        }
    }


    render() {
        const { message, message_status } = this.props;
        const { fade_animation, test } = this.state;

        return (
            message !== ""
                ? (
                    message_status === "success"
                        ? (
                        <div style={fade_animation}
                            className="message_dispatcher">
                                <p>{message}</p>
                        </div>
                        )
                        : (
                            <div style={fade_animation}
                                className="message_dispatcher_error">
                                {message}
                            </div>
                        )
                    
                )
                : ("")
        );
    }
}

const mapStateToProps = state => ({
    message: state.message.text,
    message_status: state.message.status
});
const mapDispatchToProps = dispatch => ({
    setMessage: message => dispatch(successMessage(message))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Message);
