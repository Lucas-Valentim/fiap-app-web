import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import React from "react";
import Logo from '../logotipo.png'
import Profile from '../imageprofile.png'
import { Navbar, Container, Nav, NavDropdown, Form, Offcanvas, FormControl } from 'react-bootstrap'
import {Link } from 'react-router-dom'
import { select } from 'redux-saga/effects';



  
const HomeView = () => {

  const [selectedConsulta, setSelectedConsulta] = React.useState("");
  const [selectedCadastro, setSelectedCadastro] = React.useState("");

  if(!selectedConsulta && !selectedCadastro)
    setSelectedConsulta(' Selected');  
  
  function changeSelected(e) {
    if (e.target.id == 'btnCadastrar') {
      setSelectedConsulta('')
      setSelectedCadastro(' Selected')
    }
    else {
      setSelectedConsulta(' Selected')
      setSelectedCadastro('')
    }
    var offcanvas = document.getElementsByClassName('btn-close')[0];
    offcanvas.click()
  }

  // var oldSelected = document.getElementsByClassName('Selected')[0];
  // if(oldSelected)
  //   oldSelected.classList.remove('Selected')
  // var btnSelected = document.getElementById(selected ?? 'btnConsultar')
  // if(btnSelected)
  //   btnSelected.classList.add('Selected')

  return (
    <div className="App"> 
    
    <Navbar expand={false} >
   <Container fluid>
    
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Confiance Veículos</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
              <Nav className="justify-content-end pe-3">
                <img src={Logo} className='logo' alt='Logo'></img>
                <Link to="/consulta" Id='btnConsultar' type="Button" class={'btnMenu' + selectedConsulta} onClick={ e => changeSelected(e)}>Consultar</Link>   
                <Link to="/cadastro" Id='btnCadastrar' type="Button" class={'btnMenu' + selectedCadastro} onClick={e => changeSelected(e)}>Cadastrar</Link>
              </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
   </Container>
</Navbar>
      {/* <Menu></Menu> */}
      <div className='container-fluid'>
        <header className='row justify-content-end align-items-center'>
          <label className='col-md-11 col-9 text-right'>Aptent litora orci</label>
          <img src={Profile} id='imgProfile' className='col-md-1 col-3 text-left' alt='Foto usuário'></img>
        </header>
     
      </div>   

     </div>
   
  );
}

export default HomeView;
