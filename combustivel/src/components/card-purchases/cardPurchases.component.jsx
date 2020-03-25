import React from 'react';

import './cardPurchases.styles.scss';
import CustomButton from '../custom-button/custom-button.component';


export default function CardPurchases({ date, vTotal, qtdItems, datePurchase, number, id, street, cep }) {

    const purchase = {
        "idOrder": 1,
        "totalPrice": 150.0,
        "date": "1995-08-05T00:00:00.000+0000",
        "idUser": {
            "idUser": 1,
            "firstName": "Paul",
            "lastName": "McCartney",
            "cpf": "398.588.321-05",
            "email": "paul_mccartney@gmail.com",
            "password": "123456",
            "birth": "1995-08-05T03:00:00.000+0000",
            "gender": "Masculino",
            "phone": "(11) 92344-4562"
        },
        "idAddress": {
            "idAddress": 1,
            "cep": "04502003",
            "state": "SP",
            "city": "Sao Paulo",
            "district": "Morumbi",
            "street": "Avenida Giovani Gronchi",
            "number": "2053",
            "complement": null,
            "idUser": {
                "idUser": 1,
                "firstName": "Paul",
                "lastName": "McCartney",
                "cpf": "398.588.321-05",
                "email": "paul_mccartney@gmail.com",
                "password": "123456",
                "birth": "1995-08-05T03:00:00.000+0000",
                "gender": "Masculino",
                "phone": "(11) 92344-4562"
            }
        },
        "list": [
            {
                "idOrderItem": 1,
                "idProduct": {
                    "idProduct": 1,
                    "name": "Gasolina Comum",
                    "description": "LOREM IPSUM LOREM IPSUM LOREM IPSUM",
                    "image": "imgURL",
                    "price": 3.52,
                    "quantStock": 1500,
                    "idCategory": {
                        "idCategory": 1,
                        "name": "Gasolina"
                    }
                },
                "price": 3.2,
                "quantity": 50
            },
            {
                "idOrderItem": 2,
                "idProduct": {
                    "idProduct": 2,
                    "name": "Gasolina Aditivada",
                    "description": "LOREM IPSUM LOREM IPSUM LOREM IPSUM",
                    "image": "imgURL",
                    "price": 5.45,
                    "quantStock": 9000,
                    "idCategory": {
                        "idCategory": 1,
                        "name": "Gasolina"
                    }
                },
                "price": 3.2,
                "quantity": 50
            }
        ]
    }

    const seeMore = () => {
        console.log(id)
    }



    return (
        <div className="info-purchase r">
            <div className="purchase-container">
                <div className="info-container">
                <p>compra nº {id}</p>
            </div>
            <div className="info-address" >
                <div>Rua : {street}</div>
                <div>Cep : {cep}</div>
                <div>numero casa/ap : {number}</div>
            </div>

            <div >
                <div className="info-numbers-qtd">{qtdItems} itens</div>
                <div className="info-numbers">R${vTotal}</div>
            </div>
            <CustomButton
                    type="submit"
                    className="create-button"
                    onClick={seeMore.bind(this)} >
                    + informações
                </CustomButton>
            </div>
        </div>
    );
}
