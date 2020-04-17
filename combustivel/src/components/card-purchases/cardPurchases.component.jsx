import React from 'react';

import './cardPurchases.styles.scss';
import CustomButton from '../custom-button/custom-button.component';


export default function CardPurchases({ elm }) {
    const { idOrder, date, totalPrice, idAddress: { cep, city, complement, district, idAddress, number, state, street },
        idUser: { firstName, lastName }, itemList
    } = elm;

    const seeMore = () => {
        console.log(idOrder)
    }


    return (
        <div className="info-holder box-border ">
            <div className="order-id">
                <p >compra nº {idOrder}</p>
            </div>
            <div className="container-order-content">
                <div>
                    <div className="rua">
                        <div className="card-address-break-apart">
                            <p>{street}</p>
                        </div>
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
                </div>
                <div className="order-btn-and-price">
                    <div>

                        <div className="info-numbers-qtd">{itemList.length} itens</div>
                        <div className="info-numbers">total : {Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(totalPrice)}</div>
                    </div>
                    <button
                        type="submit"
                        className="edit-button-address-card"
                        button="" >
                        ver informações
                    </button>
                </div>
            </div>



            <div className="order-info">
                {
                    itemList.map(elm => {
                        console.log(elm)
                        return (
                            <div className="other-order-info">
                            <div className="rua">
                                <div className="address-state-city-cep">
                                    <p> {elm.idProduct.name} </p>
                                </div>
                            </div>
                                <div className="address-info">
                        <div className="address-state-city-cep">
                            <p> Quantidade : {elm.quantity}</p><br></br>
                            <p>Valor Total : {Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(elm.price)}</p>
                        </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
