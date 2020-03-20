import React, {Component} from 'react';


import Card from "./card/card.component";
import "./Produtos.styles.scss";


class CardsGrid extends Component{
    constructor(props){
        super(props);
        this.state = {
            endereco: [
                {
                    "id": 1,
                    "num" : 355,
                    "rua": "rua clara muchine costa",
                    "cidade" : "taboão da serra",
                    "cep" : "06783-030",
                    "complemento" : "casa 2",
                    "estado" : "são paulo",
                    "bairro" : "jardim saporito"
            },
            {
                "id": 2,
                "num" : 355,
                "rua": "rua clara muchine costa",
                "cidade" : "taboão da serra",
                "cep" : "06783-030",
                "complemento" : "casa 2",
                "estado" : "são paulo",
                "bairro" : "jardim saporito"
        },
        {
            "id": 3,
            "num" : 355,
            "rua": "rua clara muchine costa",
            "cidade" : "taboão da serra",
            "cep" : "06783-030",
            "complemento" : "casa 2",
            "estado" : "são paulo",
            "bairro" : "jardim saporito"
    }
        ]
        }
    }

// componentDidMount(){
//     fetch(this.props.api)
//     .then( res => res.json() )
//     .then( jsonProdutos => this.setState({ produtos : jsonProdutos }))
// }


render(){
    return (
        <div className="grid-container">
            <div className="grid">
                <div className="container-elm">
                    {this.state.endereco.slice(0, this.props.itemsQtd).map(elm => {
                        return < Card key={elm.id}  endereco={elm}/>
                    })}
                </div>
            </div>
        </div>
    )
}
}

export default CardsGrid;