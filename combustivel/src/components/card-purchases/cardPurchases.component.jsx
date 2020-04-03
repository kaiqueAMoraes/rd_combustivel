import React from 'react';

import './cardPurchases.styles.scss';
import CustomButton from '../custom-button/custom-button.component';


export default function CardPurchases({ elm }) {
    const {idOrder, date, totalPrice, idAddress : {cep, city, complement, district, idAddress, number, state, street},
            idUser : {firstName, lastName}, itemList
    } = elm;
    const seeMore = () => {
        console.log(idOrder)
    }



    return (
        <div className="info-purchase r">
            <div className="purchase-container">
                <div className="info-container">
                <p>compra nº {idOrder}</p>
            </div>
            <div className="info-address" >
                <div>Rua : {street}</div>
                <div>Cep : {cep}</div>
                <div>numero casa/ap : {number}</div>
            </div>

            <div >
                <div className="info-numbers-qtd">{itemList.length} itens</div>
                <div className="info-numbers">R${totalPrice}</div>
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
