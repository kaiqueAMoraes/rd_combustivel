import React from 'react';
import { connect } from 'react-redux';
import './user-card.styless.scss';
import CustomButton from '../custom-button/custom-button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

const UserCardDashboard = ({ _USER }) => {
    console.log(_USER)
    return (
        <div className="user-dashboard-info-container">
            <span className="hello-user-dashboard">Olá, {_USER.firstName}</span>
            <div
                type="submit"
                className="edit-button-user-card"
                handleClick={(e)=> {
                    console.log(e.target)
                }} >
                    <div className="div-user-edit-icon">
                    <FontAwesomeIcon icon={faUserEdit} className="icon-userEdit"/>
                    </div>
                Editar minhas informações
            </div>
            <div className="user-card-info">
                <div className="info-container">
                    <p>{_USER.firstName} {_USER.lastName}, {_USER.gender === "M" ? "Masculino" : "Feminino"}</p>
                    <p>{_USER.email}</p>
                    <p>CPF : {_USER.cpf}</p>
                    <p>Cel : {_USER.phone}</p>
                    <p>{_USER.birth}</p>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    _USER: state.user.currentUser
});

export default connect(mapStateToProps)(UserCardDashboard); 