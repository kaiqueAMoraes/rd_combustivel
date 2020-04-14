import React, { Component } from 'react'

import Header from '../../Components/Header/header';

import './styles.css';

export default class CadastrarProduto extends Component {
    render() {
        return (
            <>
            <div>
                <Header />
                <form onSubmit="">
                    <fieldset>
                        <fieldset className="grupo">
                            <div className="campo">
                                <label for="nome">Nome</label>
                                <input type="text" id="nome" name="nome" value=""></input>
                                <label for="snome">Sobrenome</label>
                                <input type="text" name="snome" id="snome"></input>
                                <label for="snome">Sobrenome</label>
                                <input type="text" name="snome" id="snome"></input>
                                <label for="snome">Sobrenome</label>
                                <input type="text" name="snome" id="snome"></input>
                                <label for="snome">Sobrenome</label>
                                <input type="text" name="snome" id="snome"></input>
                            </div>
                        </fieldset>
                        <div className="campo">
                            <label>Categoria</label>
                            <label className ="checkbox">
                                <input type="radio" name="categoria" value="gasolina">Gasolina</input>
                            </label>
                            <label className ="checkbox">
                                <input type="radio" name="categoria" value="etanol">Etanol</input>
                            </label>
                            <label className ="checkbox">
                                <input type="radio" name="categoria" value="oleo">Óleo</input>
                            </label>
                            <label className ="checkbox">
                                <input type="radio" name="categoria" value="fluidos">Fluídos para Motor</input>
                            </label>
                        </div>
                        <button type="submit" class="botao-submit">Enviar</button>
                    </fieldset>
                </form>
            </div>
            </>
        )
    }
}

