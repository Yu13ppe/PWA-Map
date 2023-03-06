import React from 'react'
import { Link } from "react-router-dom";

function Account() {

  return (
    <div className='fondo'>
      <div className='containerInicioSesion'>
        <h1 className='titulo'>
          Inicio de Sesión
          <hr className='rayaTitulo' />
        </h1>
        <div className='containerInterno'>
          <h2 className='correoInicioSesion'>Correo Electronico</h2>
          <input className='containerCorreo' placeholder='Introduzca su correo' />
          <h2 className='passwordInicioSesion'>Password</h2>
          <input className='containerPassword' placeholder='Introduzca su contraseña' />
          <h3 className='olvidarContraseña'><Link to="/Recover">¿Olvidaste la contraseña?</Link></h3>
          <button className='botonInicio'>Iniciar Sesión</button>
          <Link to="/Register"><button className='botonRegistro'>Registrar</button></Link>
        </div>
      </div>
    </div>
  )
}

export { Account }