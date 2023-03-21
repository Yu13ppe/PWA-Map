import React from 'react'
import { Link } from "react-router-dom";
import { Label, Input } from 'reactstrap';

function Register() {

  const pulsarRegister = () =>{
    let nombre = document.getElementById("exampleName");
    let apellido = document.getElementById("exampleApellido");
    let email = document.getElementById("exampleEmail");
    let expReg = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,3}))$/
    let pass = document.getElementById("examplePassword").value;
    let confirmPass = document.getElementById("exampleConfirmPassword").value;

    if(!nombre.checkValidity()){
      alert('Por favor, solo coloque letras en el campo del nombre');
    }else if(nombre === ''){
      alert("Por favor, rellene el campo de nombre");
    }

    else if(apellido === ''){
      alert('Por favor, rellene el campo de apellido');
    }else if(!apellido.checkValidity()){
      alert("Por favor, solo coloque letras en el campo del apellido");
    }

    else if(!expReg.test(email.value)){
      alert("Por favor coloque un correo valido");
    }

    else if(pass === ''){
      alert("Por favor, complete el campo de contraseña")
    }
    else if(confirmPass === ''){
      alert("Por favor, complete el campo de confirmar contraseña")
    }
    else if(pass !== confirmPass){
      alert("Las contraseñas no coinciden")
    }

    if(nombre.checkValidity() && apellido.checkValidity() && expReg.test(email.value) && pass !== '' && confirmPass !== '' && pass === confirmPass){
      alert("Usted se ha registrado correctamente");
    }
  }




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
                pattern="^[A-Za-z]+$"
                maxlength="10"
                required
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
                pattern="^[A-Za-z]+$"
                maxlength="10"
                required
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
              <button
              className='botonRegistrarseRegistro btnRegister'
              onClick={() => {pulsarRegister()}}>
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Register }