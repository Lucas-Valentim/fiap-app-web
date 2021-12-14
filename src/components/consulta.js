import React from "react";
import './consulta.css';
import Button from './button'
import { Form, Row, Table } from 'react-bootstrap'

function Content() {
    
    return (
        <section className="container">
            <div className="row text-left">
                <h1 id='Title' className="col-sm">Consulta</h1>
            </div>
            <Form className="container text-left">
                <Row className="mb-3">
                    <Form.Group controlId="formGridMarca" className="col-md-4 col-sm-1 mb-3">
                        <Form.Label>Marca</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                            <option>Selecione</option>
                            <option>Marca 1</option>
                            <option>Marca 2</option>
                            <option>Marca 3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridAno" className="col-md-4 col-sm-1 mb-3">
                        <Form.Label>Ano</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                            <option>Selecione</option>
                            <option>Ano 1</option>
                            <option>Ano 2</option>
                            <option>Ano 3</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridCor" className="col-md-4 col-sm-1 mb-3">
                        <Form.Label>Cor</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                            <option>Selecione</option>
                            <option>Cor 1</option>
                            <option>Cor 2</option>
                            <option>Cor 3</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group controlId="formGridModelo" className="col-md-4 col-sm-1 mb-3">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                            <option>Selecione</option>
                            <option>Modelo 1</option>
                            <option>Modelo 2</option>
                            <option>Modelo 3</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formGridKilometragem" className="col-md-4 col-sm-1 mb-3">
                        <Form.Label>Kilometragem</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                            <option>Selecione</option>
                            <option>Kilometragem 1</option>
                            <option>Kilometragem 2</option>
                            <option>Kilometragem 3</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formGridFilial" className="col-md-4 col-sm-1 mb-3">
                        <Form.Label>Filial</Form.Label>
                        <Form.Select defaultValue='Selecione'>
                            <option>Selecione</option>
                            <option>Filial 1</option>
                            <option>Filial 2</option>
                            <option>Filial 3</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
            <div className="row">
                <div className="d-flex justify-content-center mb-5">
                    <Button Class='secundary' Text='Limpar'></Button>
                    <Button Class='primary' Text='Filtrar'></Button>
                </div>
            </div>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>6</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>7</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>8</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>9</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>10</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                </tbody>
            </Table>

        </section>
    );
}

export default Content;
