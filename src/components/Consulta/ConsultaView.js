import React from "react";
import $ from 'jquery';
import './consulta.css';
import Button from '../button'
import { Form, Row, Table } from 'react-bootstrap'

const ConsultaView = (props) => {

    // console.log('veiculos: ' + JSON.stringify(props.veiculo))
    // console.log('veiculos2: ' + JSON.stringify(props.Veiculos))
    // if(!props.veiculo.consulta)
    //     console.log('props.veiculo.consulta: ' + JSON.stringify(props.Veiculos.consulta))

    const [selected, setSelected] = React.useState("");
    let options = null;

    const buscaModelos = () => {

        var codMarca = document.getElementById('cmbMarcas')?.value ?? 0;
        var respModelo = new XMLHttpRequest();
        respModelo.open('GET', 'http://localhost:8088/veiculos/listarmodelos/' + codMarca, false)
        respModelo.send(null);
        console.log("status: " + respModelo.status);
        if (respModelo.status === 200) {
             var modelo = JSON.parse(respModelo.responseText);

            /* Remove all options from the select list */
            $('cmbModelos').empty();

            options = modelo.map((key) => <option value={key.codModelo}>{key.descricao}</option>);
        }
    }

    buscaModelos()

    function ChangeModelo(event) {
        setSelected(event.target.value);
        document.getElementById("cmbModelos").selectedIndex = 0;
    }

    function BuscarVeiculos() {
        var codMarca = document.getElementById('cmbMarcas')?.value ?? 0;
        var codAno = document.getElementById('cmbAno')?.value ?? 0;
        var codCor = document.getElementById('cmbCor')?.value ?? 0;
        var codModelos = document.getElementById('cmbModelos')?.value ?? 0;
        var codFilial = document.getElementById('cmbFilial')?.value ?? 0;
        props.buscaVeiculos(codMarca, codModelos, codAno, codFilial, codCor);
    }

    const limparCampos = () => {
        document.getElementById('cmbMarcas').selectedIndex = 0;
        document.getElementById('cmbAno').selectedIndex = 0;
        document.getElementById('cmbCor').selectedIndex = 0;
        document.getElementById('cmbModelos').selectedIndex = 0;
        document.getElementById("cmbFilial").selectedIndex = 0;
    }
        
    return (
        <section className="container">
            <div className="row text-left">
                <h1 id='Title' className="col-sm">Consulta</h1>
            </div>
            <Form className="container text-left">
                <Row className="mb-3">
                    <Form.Group controlId="formGridMarca" className="col-md-4 mb-3">
                        <Form.Label>Marca</Form.Label>
                        <Form.Select id="cmbMarcas" defaultValue='Selecione' onChange={e => ChangeModelo(e)}>
                            <option value={0}>Selecione</option>
                            {props.veiculo.listaMarcas?.map(key => {
                                return (<option value={key.codMarca}>{key.descricao}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridAno" className="col-md-4 mb-3">
                        <Form.Label>Ano</Form.Label>
                        <Form.Select id='cmbAno' defaultValue='Selecione'>
                            <option value={0}>Selecione</option>
                            {props.veiculo.listaAno?.map(key => {
                                return (<option value={key}>{key}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="formGridCor" className="col-md-4 mb-3">
                        <Form.Label>Cor</Form.Label>
                        <Form.Select id='cmbCor' defaultValue='Selecione'>
                            <option value={0}>Selecione</option>
                            {props.veiculo.listaCor?.map(key => {
                                return (<option value={key.codCor}>{key.cor}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group controlId="formGridModelo" className="col-md-4 mb-3">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Select id="cmbModelos" defaultValue='Selecione' onClick={buscaModelos}>
                            <option value={0}>Selecione</option>
                            {options}
                            {/* {props.Modelos?.map(key => {
                                return (<option value={key.codModelo}>{key.descricao}</option>)
                            })} */}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formGridFilial" className="col-md-4 mb-3">
                        <Form.Label>Filial</Form.Label>
                        <Form.Select id="cmbFilial" defaultValue='Selecione'>
                            <option value={0}>Selecione</option>
                            {props.veiculo.listaFiliais?.map(key => {
                                return (<option value={key.codFilial}>{key.razaoSocial}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
            <div className="row">
                <div className="d-flex justify-content-center mb-5">
                    <Button Class='secundary' Text='Limpar' ClickFunction={limparCampos}></Button>
                    <Button Class='primary' Text='Filtrar' ClickFunction={BuscarVeiculos}></Button>
                </div>
            </div>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Ano</th>
                    <th>Filial</th>
                    <th>Cor</th>
                    <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {!props.Veiculos.consulta ? props.veiculo.veiculos?.map(key => {
                        return (<tr>
                            <td>{key.codModelo.codMarca.marca}</td>
                            <td>{key.codModelo.modelo}</td>
                            <td>{key.codModelo.ano}</td>
                            <td>{key.codFilial.razaoSocial}</td>
                            <td>{key.codCor.cor}</td>
                            <td>{key.valor}</td>
                        </tr>
                        )})
                     : props.Veiculos?.veiculos.map(key => {
                        return (<tr>
                                <td>{key.codModelo.codMarca.marca}</td>
                                <td>{key.codModelo.modelo}</td>
                                <td>{key.codModelo.ano}</td>
                                <td>{key.codFilial.razaoSocial}</td>
                                <td>{key.codCor.cor}</td>
                                <td>{key.valor}</td>
                                </tr>
                                )
                        })
                    }
                </tbody>
            </Table>

        </section>
    );
}

export default ConsultaView;
