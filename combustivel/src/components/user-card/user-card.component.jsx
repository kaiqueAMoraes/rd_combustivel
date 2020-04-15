import React from 'react';
import { connect } from 'react-redux';

import './user-card.styless.scss';

const UserCardDashboard = ({ _USER }) => {
    console.log(_USER)
    return (
        <div className="user-dashboard-info-container">
            <span className="hello-user-dashboard">Olá, {_USER.firstName}</span>

            <div className="address-info">
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