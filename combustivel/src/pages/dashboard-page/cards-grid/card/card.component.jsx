import React from 'react';
import { withRouter } from 'react-router-dom';


//import { addItem } from "../../../redux/cart/cart.actions";
import './card.styles.scss'

const Card = ({ endereco }) => {
    const { rua, cidade, bairro, estado, cep, complemento,num } = endereco;
    return (
        <div className="card-produto">

            <div className="card-content-container">
                <div className="endereco-container">
                    <h3 className="endereco">Endereco</h3>
                </div>
                <h2 className="title">{rua}, {num}</h2>
                <h2 className="title">{complemento}</h2>
                <h2 className="title">{bairro}, {cidade}</h2>
                <br/>
                <h2 className="title">{estado}</h2>
                <h2 className="title">{cep}</h2>
            </div>
            <div className="btn-container">
                <button className="btn-carrinho"><span>editar</span></button>
            </div>
        </div>
    )
}


export default withRouter(Card);