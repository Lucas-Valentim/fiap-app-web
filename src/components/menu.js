import React from "react";
import './menu.css';
import Button from './button'
import Logo from '../logotipo.png'

function changeSelected(e) {
    var oldSelected = document.getElementsByClassName('btnMenuSelected')[0];
    oldSelected.classList.remove('btnMenuSelected')
    var btnSelected = document.getElementById(e.target.id)
    btnSelected.classList.add('btnMenuSelected')

}

function Menu(props) {
    return (
        <aside className='d-flex flex-column justify-content-between menu'>
            <img src={Logo} className='logo' alt='Logo'></img>
            <div>
                <Button className='' Class='btnMenuSelected' Id='btnConsultar' Text='Consultar' onClick={ e => changeSelected(e)}></Button>
                <Button Class='btnMenu' Id='btnCadastrar' Text='Cadastrar' onClick={e => changeSelected(e)}></Button>
            </div>
            <p>Nome do Sistema</p>
        </aside>
    );
}

export default Menu;
