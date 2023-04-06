import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import routes from '../Config/Routes-Nav'

function Admin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attemps, setAttemps] = useState(3);
  const [visibility, setVisibility] = useState(routes);

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    const user = users.find((user) => user.email === email && user.password === password);

    if(attemps === 0){
      setError("Has superado el número de intentos. Intenta más tarde.");
    }
    else if (user) {
      // Si se encuentra el usuario, cambia de ventana
      history.push("/VariableEditor");
    }
    else {
      // Si no se encuentra el usuario, establece un mensaje de error
      setAttemps(attemps -1);
      setError(`Correo o contraseña incorrectos. Inténtalo de nuevo. Intentos restantes: ${attemps}`);
    }
  };

  const users = [
    { email: "joseportillo@admin.com", password: "123456" },
    { email: "jesusramirez@admin.com", password: "123456" },
    { email: "rubenurdaneta@admin.com", password: "123456" },
  ];

  return (
    <div className='fondo'>
      <div className='containerInicioSesion'>
        <h1 className='titulo'>
          Inicio de Sesión
          <div className='rayaTitulo' />
          {error && <div className="error">{error}</div>}
        </h1>
        <div className='containerInterno'>
          <form className='Form' onSubmit={handleSubmit}>
            <Label className='correoInicioSesion' for="exampleEmail">
              Email
            </Label>
            <Input
              className='containerCorreo'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h3 className='olvidarContraseña'>
              <Link to="/Recover">¿Olvidaste la contraseña?</Link>
            </h3>
            <div className='LoginButtons__admin'>
              <button type="submit" className='botonInicio btnLogin'>
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export {Admin}