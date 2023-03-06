import React from 'react'
import { Link } from "react-router-dom";
import { Label, Input } from 'reactstrap';

function Register() {
  return (
    <div>
      <div className='containerInternoRegistro'>
        <h1 className='titulo'>
          Registrar Usuario
          <div className='rayaTitulo' />
        </h1>
        <div className='containerInformacionRegistro'>
          <div className='Form'>
            <div className='FormName'>
              <div className='Nombre'>
              <Label className='nombreRegistro' for="exampleName">
                Nombre
              </Label>
              <Input
                className='inputNombreRegistro'
                type="text"
                name="Name"
                id="exampleName"
                placeholder="Introduzca su Nombre"
              />
              </div>
              <div className='Apellido'>
              <Label className='apellidoRegistro' for="exampleApellido">
                Apellido
              </Label>
              <Input
                className='inputApellidoRegistro'
                type="text"
                name="Apellido"
                id="exampleApellido"
                placeholder="Introduzca su Apellido"
              />
              </div>
            </div>
            <Label className='correoRegistro' for="exampleEmail">
              Email
            </Label>
            <Input
              className='inputCorreoRegistro'
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Introduzca su correo"
            />

            <Label className='contrasenaRegistro' for="examplePassword">
              Password
            </Label>
            <Input
              className='inputContrasenaRegistro'
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
            <Label className='confirmarContrasenaRegistro' for="exampleConfirmPassword">
              Password
            </Label>
            <Input
              className='inputConfirmarContrasenaRegistro'
              id="exampleConfirmPassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />

            <Label className='nacimientoRegistro' for="exampleDate">
              Fecha de Nacimiento
            </Label>
            <Input
              className='inputDiaRegistro'
              id="exampleDate"
              name="date"
              placeholder="date placeholder"
              type="date"
            />

            <div className='RegisterButtons'>
              <Link to="/Account"><button className='botonVolverRegistro btnRegister'>Volver</button></Link>
              <button className='botonRegistrarseRegistro btnRegister'>Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Register }