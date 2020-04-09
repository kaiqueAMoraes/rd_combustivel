import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';
import { connect } from 'react-redux'

import "./sign-in-sign-up.styless.scss"

class SIGN_IN_SIGN_UP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stuff: []
    }
  }

  render() {
    return (
      <>
        <div className="sign-illustration">
          <Link to="/" className="go-back-sign">Voltar</Link>
        </div>
      </>
    )
  }

}

const mapDispatchToProps = dispatch => ({

})

export default withRouter(connect(null, mapDispatchToProps)(SIGN_IN_SIGN_UP))