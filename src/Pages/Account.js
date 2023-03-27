import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";

function Account() {
  // const [auth, setAuth] = useState(false);
  // const DB = 'joseportillo@hotmail.com';
  // const DBP = "123456";
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      // Si se encuentra el usuario, establece un mensaje de éxito
      setError("¡Inicio de sesión exitoso!");
      history.push("/Perfil");
    } else {
      // Si no se encuentra el usuario, establece un mensaje de error
      setError("Correo o contraseña incorrectos. Inténtalo de nuevo.");
    }
  };

  const users = [
    { email: "joseportillo@gmail.com", password: "123456" },
    { email: "jesusramirez@hotmail.com", password: "123456" },
    { email: "rubenurdaneta@gmail.com", password: "123456" },
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
            <div className='LoginButtons'>
              <button type="submit" className='botonInicio btnLogin'>
                Iniciar Sesión
              </button>
              <Link to="/Register">
                <button className='botonRegistro btnLogin'>
                  Registrar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export { Account }