import React from 'react';
import axios from 'axios';

import './cardAddress.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';


class CardAddress extends React.Component {
    constructor(props) {
        super(props)
    }

    handleEdit = () => {
        console.log(this.props)
        const { cep, state, city, district, street, number, complement, id, userId } = this.props;

        const address2 = {
            "idAdress": id,
            "cep": cep,
            "state": state,
            "city": city,
            "district": district,
            "street": street,
            "number": number,
            "complement": complement,
            "user": {
                "idUser": userId
            }
        }

        this.props.history.push('/dashboard/edit-endereco', { response: address2 });
    }

    handleDelete = async () => {
        console.log("deleted")
        const { id } = this.props;

        await axios.delete(`http://localhost:8080/delete-address/${id}`).then(
            window.location.reload()
        )
    }

    handleRedirect = ({history}) => {
        history.push('/select-address')
    }

    render() {
        const { cep, state, city, district, street, number, complement, id , history} = this.props;
        console.log(this.props)
        return (
            <div className="info-holder box-border">

                <div className="rua">
                    <p>{street}</p>
                </div>

                <div className="address-info">
                    <div className="address-state-city-cep">
                    <p>{state},</p>
                    <p>{city}</p>
                    <p>- {cep}</p>
                    </div>
                    <div className="address-state-city-cep">
                    <p>{district}</p>
                    <p>- {number}</p>
                    {complement !== "" ? (
                        <p>, {complement}</p>
                    ) : ""}
                    </div>
                </div>


                {
                    history.location.pathname === "/dashboard" ?
                    (
                        <div className="line-break-left">
                        <CustomButton
                            type="submit"
                            className="edit-button"
                            onClick={this.handleEdit.bind(this)} >
                            Editar
                    </CustomButton>
    
                        <CustomButton
                            type="submit"
                            className="delete-button"
                            onClick={this.handleDelete.bind(this)} >
                            excluir
                    </CustomButton>
                    </div>
                    )
                    :
                    (
                        <div className="line-break-left">
                        <CustomButton
                            type="submit"
                            className="delete-button"
                            onClick={() => this.handleRedirect({history})} >
                            usar outro endereço
                        </CustomButton>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default withRouter(CardAddress);
