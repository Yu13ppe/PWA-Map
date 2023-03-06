import React from 'react'
import { Link } from "react-router-dom";
import { Label, Input } from 'reactstrap';
//correoInicioSesion
function Account() {

  return (
    <div className='fondo'>
      <div className='containerInicioSesion'>
        <h1 className='titulo'>
          Inicio de Sesión
          <div className='rayaTitulo' />
        </h1>
        <div className='containerInterno'>
          <div className='Form'>
            <Label className='correoInicioSesion' for="exampleEmail">
              Email
            </Label>
            <Input 
            className='containerCorreo' 
            type="email" 
            name="email" 
            id="exampleEmail" 
            placeholder="Introduzca su correo" 
            />
            <Label className='passwordInicioSesion' for="examplePassword">
              Password
            </Label>
            <Input
              className='containerPassword'
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
            <h3 className='olvidarContraseña'>
              <Link to="/Recover">¿Olvidaste la contraseña?</Link>
            </h3>
            <div className='LoginButtons'>
              <Link to="/Perfil"><button className='botonInicio btnLogin'>Iniciar Sesión</button></Link>
              <Link to="/Register"><button className='botonRegistro btnLogin'>Registrar</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Account }