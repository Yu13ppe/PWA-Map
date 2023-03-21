import React from 'react'
import { Link } from "react-router-dom";
import { Label, Input } from 'reactstrap';

function Account() {
  // const [auth, setAuth] = useState(false);
  const DB = 'joseportillo@hotmail.com';
  const DBP = "123456";

  const pulsar = () => {
    let email = document.getElementById("exampleEmail").value;
    let expReg = /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,3}))$/
    let pass = document.getElementById("examplePassword").value;

    if (expReg.test(email.value)) {
      alert("Usted introdujo un correo no valido");
    }

    if (email === '' && pass === '') {
      alert("Campos vacios");

    } else if (email === '') {
      alert("El campo de correo esta vacio");

    } else if (pass === '') {
      alert("El campo de Contaseña esta vacio");

    } else if (email !== DB) {
      alert("No se encontro el correo");

    } else if (pass !== DBP) {
      alert("Contraseña incorrecta");

    } else {
      alert("Usted se ha logueado correctamente");
    }
  }

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
              placeholder="Introduzca su contraseña"
              type="password"
            />
            <h3 className='olvidarContraseña'>
              <Link to="/Recover">¿Olvidaste la contraseña?</Link>
            </h3>
            <div className='LoginButtons'>
              <Link to="/Perfil">
                <button onClick={() => { pulsar() }} className='botonInicio btnLogin'>
                  Iniciar Sesión
              </button>
              </Link>
              <Link to="/Register">
                <button className='botonRegistro btnLogin'>
                  Registrar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Account }