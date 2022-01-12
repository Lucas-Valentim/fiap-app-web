import React from "react";
import './cadastro.css';
import Button from '../button'
import { Form, Row, Table } from 'react-bootstrap'

const CadastroView = (props) => {

    let infoMessage = null;

    console.log("ENTROU NA CADASTRO VIEW!!");
    console.log("conteúdo do listaMarcas" + props.listaMarcas);

    /*Inicio Implementação Lucas*/
    function CarregarModelos() {
        var cmbMarca = document.getElementById('cmbMarcas');
        var codMarca = cmbMarca?.value ?? 0;
        props.buscaModelos(codMarca);
    }
    function ChangeModelo() {
        document.getElementById("cmbModelos").selectedIndex = 0;
    }
    /*Fim Implementação Lucas*/

    function formataValor() {

        console.log("Entrou no formataValor");

        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        var valorAtual = document.getElementById("txtValor").value;
        var valorFormatado = formatter.format(valorAtual);

        console.log("Valor Atual: " + valorAtual);
        console.log("Valor Formatado: " + valorFormatado)

        document.getElementById("txtValor").value = valorFormatado;

    }

    /* Consistência dos dados imputados do veículo */
    function validaCadastro() {

        var statusValidacaoOK = true;
        var lengthRenavam = document.getElementById("txtRenavam").value.length;
        var lengthKM = document.getElementById("txtKM").value.length;
        var lengthPlaca = document.getElementById("txtPlaca").value.length;
        var lengthValor = document.getElementById("txtValor").value.length;

        console.log("Entrou no valida cadastro");
        console.log("tamanho do renavam : " + lengthRenavam);


        if (document.getElementById("cmbMarcas").selectedIndex === 0) {

            statusValidacaoOK = false;

            alert("Marca não selecionada!");

        } else if (document.getElementById("cmbModelos").selectedIndex === 0) {
            statusValidacaoOK = false;

            alert("Modelo não selecionado!");

        } else if (document.getElementById("cmbAno").selectedIndex === 0) {
            statusValidacaoOK = false;

            alert("Ano não selecionado!");

        } else if ((lengthRenavam > 9) || (lengthRenavam === 0) ) {

            statusValidacaoOK = false;
            alert("Renavam inválido!");

        } else if (document.getElementById("cmbCor").selectedIndex === 0) {
            statusValidacaoOK = false;

            alert("Cor não selecionado!");

        } else if (lengthKM > 6) {

            statusValidacaoOK = false;
            alert("KM com tamanho maior que o permitido!");

        } else if (document.getElementById("cmbFilial").selectedIndex === 0) {
            statusValidacaoOK = false;

            alert("Filial não selecionada!");

        } else if (lengthValor <= 0) {
            statusValidacaoOK = false;

            alert("Valor não informado!");

        }else if ((lengthPlaca < 7) || (lengthPlaca === 0)) {

            statusValidacaoOK = false;
            alert("Placa inválida!");

        }       

        console.log("Status da Validação do Cadastro: " + statusValidacaoOK);

        if (statusValidacaoOK) {

            console.log("Acionou o Cadastramento");

            props.cadastrarVeiculo();

            //Apresentar mensagem na tela de cadastramento ok e não ok
            if (props.Success === 1) {

                alert("Cadastro Realizado com Sucesso!");
   
            } else if (props.Success === 2) {

                alert("Erro ao incluir o Veículo!");

            };

        }

    }




    //função para limpar os campos quando o botão <Limpar> for acionado
    const limparCampos = () => {
        console.log("entrou no limparCampos");
        document.getElementById("cmbModelos").selectedIndex = 0;
        document.getElementById("cmbMarcas").selectedIndex = 0;
        document.getElementById("cmbCor").selectedIndex = 0;
        document.getElementById("cmbAno").selectedIndex = 0;
        document.getElementById("cmbFilial").selectedIndex = 0;
        document.getElementById("txtRenavam").value = 0;
        document.getElementById("txtValor").value = 0;
        document.getElementById("txtPlaca").value = '';
        document.getElementById("txtKM").value = 0;
        document.getElementById("txtDescricao").value = '';


    }


    return (
        <section className="container">
            <div className="row text-left">
                <h1 id='Title' className="col-sm">Cadastro</h1>
            </div>
            <Form className="container text-left">
                <Row className="mb-3">
                    <Form.Group controlId="formGridMarca" className="col-md-4 mb-3" name="formGridMarca">
                        <Form.Label>Marca</Form.Label>
                        <Form.Select id="cmbMarcas" defaultValue='Selecione' onChange={props.onSelectMarca, ChangeModelo}>
                            <option>Selecione</option>
                            {props.veiculo.listaMarcas?.map(key => {
                                return (<option value={key.codMarca}>{key.descricao}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formGridModelo" className="col-md-4 mb-3" name="formGridModelo">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Select id="cmbModelos" defaultValue='Selecione' onClick={CarregarModelos} onChange={props.onSelectModelo}>
                            <option>Selecione</option>
                            {props.Modelos?.map(key => {
                                return (<option value={key.codModelo}>{key.descricao}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formGridAno" className="col-md-4 mb-3" name="formGridAno">
                        <Form.Label>Ano</Form.Label>
                        <Form.Select id="cmbAno" defaultValue='Selecione' onChange={props.onSelectAno}>
                            <option>Selecione</option>
                            {props.veiculo.listaAno?.map(key => {
                                return (<option value={key}>{key}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>

                </Row>
                <Row className="mb-3">

                    <Form.Group controlId="formGridRenavam" className="col-md-4 mb-3" name="formGridRenavam">
                        <Form.Label>Renavam</Form.Label>
                        <Form.Control id="txtRenavam" type="number" maxLength="9" onChange={props.onSelectRenavam}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGridCor" className="col-md-4 mb-3" name="formGridCor">
                        <Form.Label>Cor</Form.Label>
                        <Form.Select id="cmbCor" defaultValue='Selecione' onChange={props.onSelectCor}>
                            <option>Selecione</option>
                            {props.veiculo.listaCor?.map(key => {
                                return (<option value={key.codCor}>{key.cor}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formGridKilometragem" className="col-md-4 mb-3" name="formGridKilometragem">
                        <Form.Label>Kilometragem</Form.Label>
                        <Form.Control id="txtKM" type="number" max="999999" onChange={props.onSelectKm}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGridPlaca" className="col-md-4 mb-3" name="formGridPlaca">
                        <Form.Label>Placa</Form.Label>
                        <Form.Control id="txtPlaca" type="text" maxLength="7" onChange={props.onSelectPlaca}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGridFilial" className="col-md-4 mb-3" name="formGridFilial">
                        <Form.Label>Filial</Form.Label>
                        <Form.Select id="cmbFilial" defaultValue='Selecione' onChange={props.onSelectFilial}>
                            <option>Selecione</option>
                            {props.veiculo.listaFiliais?.map(key => {
                                return (<option value={key.codFilial}>{key.razaoSocial}</option>)
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formGridValor" className="col-md-4 mb-3" name="formGridValor">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control id="txtValor" type="text" onBlur={formataValor} onChange={props.onSelectValor}>
                        </Form.Control>
                    </Form.Group>

                </Row>
                <Row className="mb-3">

                    <Form.Group controlId="formGridDescricao" className="col-md-8 mb-3" name="formGridDescricao">
                        <Form.Label>Descricao</Form.Label>
                        <Form.Control id="txtDescricao" as="textarea" onChange={props.onSelectDescricao}>
                        </Form.Control>
                    </Form.Group>
                </Row>

            </Form>
            <div className="row">
                <div className="d-flex justify-content-center mb-5">
                    <Button Class='secundary' ClickFunction={limparCampos} Text='Limpar' ></Button>
                    <Button Class='primary' ClickFunction={validaCadastro} Text='Salvar'></Button>
                </div>
            </div>


        </section>
    );
}

export default CadastroView;
