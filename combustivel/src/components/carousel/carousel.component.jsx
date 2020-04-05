import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

import './carousel.styles.scss';

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            left: 100
        }
    }

componentDidMount = () => {
        setInterval(() => {
            this.handleCarouselRight();
        }, 8000);
    
}

    // HANDLES DO CAROUSEL COMEÇAM AQUI CAROUSEL COMEÇA AQUI
    handleCarouselLeft = () => {
        // LEFT É O STATE "FINAL=0/INITIAL=400" QUE EMPURRA AS "DIVS"
        if (this.state.left !== 0) {
            // A CONTA FOI FEITA USANDO VW(viewport width) POR ISSO TEM QUES ETAR SEMPRE INCREMENTANDO OU DECREMENTANDO 100
            this.setState({ left: this.state.left -= 100 })
        }
        // CHEGANDO A ZERO ELE RESETA AO INITIAL STATE
        if (this.state.left === 0) {
            this.setState({ left: 400 }
            )
        }

    }

    // scroll para a direita do carousel ---> ///
    handleCarouselRight = () => {
        this.setState({ left: this.state.left += 100 })

        if (this.state.left === 500) {
            this.setState({ left: 100 }
            )
        }
    }

    // scroll para a direita do carousel ---> termina aqui ///
    render() {
        const left = {
            right: `${this.state.left}vw`,
        }
       
        return (
            <>
                {/* CAROUSEL ===> TO CREATE COMPONENT */}
                <div className="carousel-controller">
                    <button className="left" onClick={this.handleCarouselLeft}><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <div className="carousel-container">
                        <div className="carousel carousel-a" style={left}><span>0</span></div>
                        <div className="carousel carousel-b" style={left}><span>1</span></div>
                        <div className="carousel carousel-c" style={left}><span>2</span></div>
                        <div className="carousel carousel-d" style={left}><span>3</span></div>
                        <div className="carousel carousel-e" style={left}><span>4</span></div>
                    </div>
                    <button className="right" onClick={this.handleCarouselRight}><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
                {/* CAROUSEL ===> TO CREATE COMPONENT */}
            </>
        )
    }
}

export default withRouter(Carousel);
