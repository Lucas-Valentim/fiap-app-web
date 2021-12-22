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
            <Form className="container text-left">
               <Row className="mb-3">
                     <Form.Group controlId="formGridMarca" className="col-md-4 mb-3">
                        <Form.Label>Marca</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                            <option>Selecione</option>
                            <option>Marca 1</option>
                            <option>Marca 2</option>
                            <option>Marca 3</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formGridModelo" className="col-md-4 mb-3">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                                <option>Selecione</option>
                                <option>Modelo 1</option>
                                <option>Modelo 2</option>
                                <option>Modelo 3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridAno" className="col-md-4 mb-3">
                        <Form.Label>Ano</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                                <option>Selecione</option>
                                <option>1998</option>
                                <option>1999</option>
                                <option>2000</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="formGridCor" className="col-md-4 mb-3">
                        <Form.Label>Cor</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                                <option>Selecione</option>
                                <option>Azul</option>
                                <option>Preto</option>
                                <option>Vermelho</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formGridKilometragem" className="col-md-4 mb-3">
                        <Form.Label>Kilometragem</Form.Label>
                        <Form.Control type="number">
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGridPlaca" className="col-md-4 mb-3">
                        <Form.Label>Placa</Form.Label>
                        <Form.Control type="text" maxLength="8">
                        </Form.Control>
                    </Form.Group>

                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="formGridFilial" className="col-md-4 mb-3">
                        <Form.Label>Filial</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                            <option>Selecione</option>
                            <option>Filial 1</option>
                            <option>Filial 2</option>
                            <option>Filial 3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridDescricao" className="col-md-8 mb-3">
                        <Form.Label>Descricao</Form.Label>
                        <Form.Control as="textarea">
                        </Form.Control>
                    </Form.Group>
                </Row>
                {/* <Row className="mb-3">
                    <div class="input-group">
                        <span class="input-group-text">Descrição</span>
                        <textarea class="form-control" aria-label="Descrição"></textarea>
                    </div>
                </Row> */}

            </Form>
            <div className="row">
                <div className="d-flex justify-content-center mb-5">
                    <Button Class='secundary' Text='Limpar'></Button>
                    <Button Class='primary' Text='Salvar'></Button>
                </div>
            </div>
        </section>
    );
}

export default Content;
