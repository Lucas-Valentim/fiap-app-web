import React from "react";
import './cadastro.css';
import Button from '../button'
import { Form, Row, Table } from 'react-bootstrap'

function Content() {
    
    return (
        <section className="container">
            <div className="row text-left">
                <h1 id='Title' className="col-sm">Cadastro</h1>
            </div>
            <form class="container text-left">
               <Row className="mb-3">
                    <div class="col-md-4">
                        <label for="inputMarca" class="form-label">Marca</label>
                        <select id="inputMarca" class="form-select">
                                <option>Selecione</option>
                                <option>Marca 1</option>
                                <option>Marca 2</option>
                                <option>Marca 3</option>
                        </select>
                    </div>

                    <div class="col-md-4">
                        <label for="inputModelo" class="form-label">Modelo</label>
                        <select id="inputModelo" class="form-select">
                                <option>Selecione</option>
                                <option>Modelo 1</option>
                                <option>Modelo 2</option>
                                <option>Modelo 3</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputAno" class="form-label">Ano</label>
                        <select id="inputAno" class="form-select">
                                <option>Selecione</option>
                                <option>1998</option>
                                <option>1999</option>
                                <option>2000</option>
                        </select>
                    </div>
                </Row>
                <Row className="mb-3">
                    <div class="col-md-4">
                        <label for="inputCor" class="form-label">Cor</label>
                        <select id="inputCor" class="form-select">
                                <option>Selecione</option>
                                <option>Azul</option>
                                <option>Preto</option>
                                <option>Vermelho</option>
                        </select>
                    </div>

                    <div class="col-md-4">
                        <label for="inputkm" class="form-label">Kilometragem</label>
                        <input type="number" maxLength="5" class="form-control" id="inputkm"></input>
                    </div>
                    <div class="col-md-4">
                        <label for="inputPlaca" class="form-label">Placa</label>
                        <input type="text" class="form-control" id="inputPlaca"></input>
                    </div>

                </Row>
                <Row className="mb-3">
                    <div class="col-md-6">
                        <label for="inputFilial" class="form-label">Filial</label>
                        <select id="inputFilial" class="form-select">
                                <option>Selecione</option>
                                <option>Jundiai</option>
                                <option>Campinas</option>
                                <option>Rio de Janeiro</option>
                        </select>
                    </div>
                </Row>
                <Row className="mb-3">
                    <div class="input-group">
                        <span class="input-group-text">Descrição</span>
                        <textarea class="form-control" aria-label="Descrição"></textarea>
                    </div>
                </Row>

            </form>
            <div className="row">
                <div className="d-flex justify-content-center mb-5">
                    <Button Class='primary' Text='Limpar'></Button>
                    <Button Class='primary' Text='Salvar'></Button>
                </div>
            </div>
        </section>
    );
}

export default Content;
