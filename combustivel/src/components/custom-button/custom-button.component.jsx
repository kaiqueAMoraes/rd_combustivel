import React from 'react';

import './custom-button.styles.scss';
import Spinner from 'react-bootstrap/Spinner';

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            fade_out: {
                animation: "",
                animationFillMode: ""
            },
            fade_in_out: {
                animation: "",
                animationFillMode: ""
            }
        }
    }
    handleDelay = (handleClick) => {
        
        let counter = 0;
        let handleAction = () => {
            if (counter === 0) {
                counter++
                this.setState({
                    fade_out: {
                        opacity : 0
                    },
                    fade_in_out: {
                        opacity : 1
                    }
                }, () => {
                    return handleClick;
                })
                
            } else {
                clearInterval(timer)
            }
        }
        const timer = setTimeout(handleAction, 2500)
    }

    render() {
        const {fade_out, fade_in_out} = this.state;
        const { children, handleClick, _class, ...otherProps } = this.props;
        return (
            <button className={` custom-button ${_class}`} {...otherProps}
                onClick={(e) => {
                    this.setState({
                    fade_out : {
                        animation: "fade_simple_fade_in_out 4s  1 normal forwards",
                        animationFillMode: "forwards"
                      },
                      fade_in_out : {
                        animation: "fade_simple_fade_out_in 4.8s  1 normal forwards",
                        animationFillMode: "forwards"
                      }})
                    this.handleDelay(handleClick(e))
                }}>
                    
                    <div className="btn-text-content" style={fade_out}>
                    <Spinner animation="grow" variant="light" />
                    </div>
                    <span style={fade_in_out}>{children}</span>
            </button>
        )
    }
}

export default CustomButton;
