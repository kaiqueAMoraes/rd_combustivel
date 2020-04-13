import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import FormInput, { FormInputMedium } from "../../components/form-input/form-input.componets";
import axios from 'axios';
import CustomButton from '../../components/custom-button/custom-button.component';
import { successMessage, errorMessage } from "../../redux/message/message.actions";
import { setCurrentUser } from "../../redux/user/user.actions.js";
import VALIDATE from "../../validations/root_val";

class SignInPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		}
	}

	// TOMA CONTA DAS MUDANÇAS DOS VALORES DOS INPUTS
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSignIn = async () => {
		const { email, password } = this.state;
		const { successMessage, errorMessage, setUser } = this.props;

		const _USER = {
			"email": email,
			"password": password
		}

		try {
			await axios.post("http://localhost:8080/login", _USER).then(
				res => {
					if (res.status === 200) {
						axios.get("http://localhost:8080/find-user/"
							+ VALIDATE._ONLY_NUMBERS(JSON.stringify(res.data)))
							.then(res => {
								VALIDATE._DELAY_ACTION(
									() => {
										setUser(res.data)
										this.props.history.push("/")
									},
									() => {
										successMessage(`Seja bem vindo de volta, ${res.data.firstName}!`)
									},
									3200
								)
							}
							)
					} else {
						throw new Error(res.data);
					}
				}
			)
		} catch (error) {
			errorMessage(JSON.stringify(error.message))
		}
	}

	render() {
		const { email, password } = this.state;
		const { errorMessage } = this.props;
		return (
			<div>
				<FormInputMedium
					name="email"
					type="email"
					value={email}
					handleChange={this.handleChange}
					label='email'
					required />

				<FormInputMedium
					name="password"
					type="password"
					value={password}
					handleChange={this.handleChange}
					label='senha'
					isPassword={true}
					required />

				<div className="group-medium">
					<div className="button-sign-position spaced-btn-sign-in-sign-up">

						<CustomButton
							handleClick={() => {
								if (VALIDATE._IS_EMPTY([password, email])) { 
									errorMessage("todos os campos precisam ser preenchidos") 
								}
								else {
									{ this.handleSignIn() }
								}
							}
							}
							_class="create-button"
						>
							REALIZAR LOGIN
            			</CustomButton>
					</div>
				</div>
			</div>
		)
	}
}
const mapDispatchToProps = dispatch => ({
	successMessage: message => dispatch(successMessage(message)),
	errorMessage: message => dispatch(errorMessage(message)),
	setUser: user => dispatch(setCurrentUser(user))
})


export default withRouter(connect(null, mapDispatchToProps)(SignInPage))