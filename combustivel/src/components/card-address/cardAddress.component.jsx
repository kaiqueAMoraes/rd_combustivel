import React from 'react';
import axios from 'axios';

import './cardAddress.styles.scss';
import CustomButton from '../custom-button/custom-button.component';


export default function CardAddress({ cep, state, city, district, street, number, complement, id }) {
    const handleEdit = () => {
        console.log(id)

    }
    const handleDelete = async () => {
        const config = {
            params: { "id": id },
            headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }}

        axios.delete(`http://localhost:8080/delete-address/`,config)
    }

    return (
        <div className="info-holder box-border">
            <div className="info-container">
                <span>cep</span><p>{cep}</p>
            </div>

            <div className="info-container">
                <span>estado</span><p>{state}</p>
            </div>

            <div className="info-container">
                <span>cidade</span><p>{city}</p>
            </div>

            <div className="info-container">
                <span>bairro</span><p>{district}</p>
            </div>

            <div className="info-container">
                <span>rua</span><p>{street}</p>
            </div>

            <div className="info-container">
                <span>numero</span><p>{number}</p>
            </div>


            {complement !== "" ? (
                <div className="info-container">
                    <span>complemento</span><p>{complement}</p>
                </div>
            ) : ""}

            <div className="line-break-left">
                <CustomButton
                    type="submit"
                    className="edit-button"
                    onClick={handleEdit.bind(this)} >
                    Editar
                </CustomButton>

                <CustomButton
                    type="submit"
                    className="delete-button"
                    onClick={handleDelete.bind(this)} >
                    excluir
                </CustomButton>
            </div>
        </div>
    );
}
