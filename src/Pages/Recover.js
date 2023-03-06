import React from 'react'
import { Link } from "react-router-dom";
import { Label, Input } from 'reactstrap';

function Recover() {
  return (
    <div>
      <div className='containerRecuperarPassword'>
        <h1 className='titulo'>
          Restablecer Contraseña
          <div className='rayaTitulo' />
        </h1>

        <div className='containerInternoPassword'>
          <div className='Form'>
            <p className='introducirCorreoPassword'>Ingrese su correo electrónico para buscar su cuenta</p>
            
            <Label className='correoPassword' for="exampleEmail">
              Email
            </Label>
            <Input 
            className='inputCorreoPassword' 
            type="email" 
            name="email" 
            id="exampleEmail" 
            placeholder="Introduzca su correo" 
            />
            
            <div className='RecoverButtons'>
            <button className='buttonBuscarPassword btnRecover'> Buscar</button>
            <Link to="/Account"><button className='buttonCancelarPassword btnRecover'>Cancelar</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Recover }