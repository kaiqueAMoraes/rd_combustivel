import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import "./sign-in-sign-up.styless.scss"
import CustomButton from '../../components/custom-button/custom-button.component';
import SignInPage from '../sign-in-page/sign-in-page.components';
import SignUp from '../../components/sign-up/sign-up.component';

import Animations from "../../animations/animation_controller";

class SIGN_IN_SIGN_UP extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoginComponent: true,
      fade_out: {
        none: ""
      },
      fade_login: {
        none: ""
      },
      fade_test: {
        opacity: 0
      }
    }
  }

  handleUserCredentialsComponentView = (e) => {
    const {isLoginComponent} = this.state;
    //TODO: bring in => bring back => bring back in => repeat

    if(isLoginComponent){
      return Animations.DELAY_CONTROLLER(
        () => {
          this.setState({
            isLoginComponent: !this.state.isLoginComponent
          })
        },
        () => {
          this.setState({
            fade_login: Animations.FADE_OFF(e),
            fade_test : Animations.FADE_IN(e)
          })
        },
        850
      )
    }
    return Animations.DELAY_CONTROLLER(
      () => {
        this.setState({
          isLoginComponent: !this.state.isLoginComponent
        })
      },
      () => {
        this.setState({
          fade_login: Animations.FADE_IN(e),
          fade_test : Animations.FADE_OFF(e)
        })
      },
      850
    )
  }


  // HANDLE O FADE SPA DA PAGINA
  handleFade = e => {
    e.preventDefault();
    this.setState({
      fade_out: {
        animation: "fade_off 3s  1 normal forwards",
        animationFillMode: "forwards"
      }
    })

    let handleAction = () => {
      let counter = 0;
      if (counter === 0) {
        counter++
        this.props.history.push('/')
      } else {
        clearInterval(timer);
      }
    }
    const timer = setTimeout(handleAction, 1500);
  }



  render() {
    const { fade_out, isLoginComponent, whichPage, fade_login, fade_test } = this.state;

    return (
      <div className="sign-container" style={fade_out} >

        <div className="sign-container-left-panel">
          <Link to="/" onClick={this.handleFade} className="go-back-sign">Voltar</Link>
          <span className="span-sign">Encontre o melhor para o seu veiculo</span>
          <div className="sign-illustration"></div>
        </div>

        <div className="sign-in-container">
          <div className="form-container">
            <div className="group-sign-cadastro">

              <div className="button-sign-position">
                <span className="title-sign-in-sign-up">
                {
                isLoginComponent 
                ? ("Login")
                : ("Cadastro")
                }
                  </span>
                <CustomButton
                  handleClick={this.handleUserCredentialsComponentView}
                  _class=""
                >
                  {
                    isLoginComponent 
                    ? ("NOVO POR AQUI? CADASTRA-SE")
                    : ("JÁ TEM CONTA ? FAÇA LOGIN")
                  }
                  
              </CustomButton>
              </div>
            </div>
            {
              isLoginComponent
                ? (<div style={fade_login} className="relative-animation-container"><SignInPage /></div>)
                : (<div style={fade_test} className="relative-animation-container"><SignUp /></div>)
            }
          <div className="spacer"></div>
          </div>
        </div>

      </div>
    )
  }
}


export default withRouter(SIGN_IN_SIGN_UP)