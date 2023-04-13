import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Register() {
  const history = useHistory();
  const [usu_name, setName] = useState('');
  const [usu_lastName, setLastname] = useState('');
  const [usu_birthday, setFdn] = useState('');
  const [usu_email, setEmail] = useState('');
  const [usu_password, setPassword] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const usu_rol = 'Usuario';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://infotpm-backend-production.up.railway.app/Users');
      setUsuarios(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const user = usuarios.find((user) => user.usu_email === usu_email);

    if (user) {
      alert('El correo ya existe');
      return;
    }
    try {
      await axios.post(
        'https://infotpm-backend-production.up.railway.app/Users/create',
        {
          usu_name,
          usu_lastName,
          usu_email,
          usu_birthday,
          usu_password,
          usu_rol,
        }
      );
      setName('');
      setLastname('');
      setFdn('');
      setEmail('');
      setPassword('');
      history.push('/Account');
    } catch (error) {
      console.log(error);
    }
  };

  function handleBirthdayChange(date) {
    setFdn(date);
  }
  
  return (
    <div>
      <div className='containerInternoRegistro'>
        <h1 className='titulo'>
          Registrar Usuario
          <div className='rayaTitulo' />
        </h1>
        <div className='containerInformacionRegistro'>
          <form onSubmit={handleSubmit} className='Form'>
            <div className='FormName'>
              <div className='Nombre'>
                <Label className='nombreRegistro' htmlFor="exampleName">
                  Nombre
                </Label>
                <Input
                  className='inputNombreRegistro'
                  type="text"
                  name="Name"
                  defaultValue={usu_name}
                  onChange={event => setName(event.target.value)}
                  id="exampleName"
                  placeholder="Introduzca su Nombre..."
                  pattern="^[A-ZÑa-zñ]+$"
                  maxLength="48"
                  required
                />
              </div>
              <div className='Apellido'>
                <Label className='apellidoRegistro' htmlFor="exampleApellido">
                  Apellido
                </Label>
                <Input
                  className='inputApellidoRegistro'
                  type="text"
                  name="Apellido"
                  defaultValue={usu_lastName}
                  onChange={event => setLastname(event.target.value)}
                  id="exampleApellido"
                  placeholder="Introduzca su Apellido..."
                  pattern="^[A-ZÑa-zñ]+$"
                  maxLength="48"
                  required
                />
              </div>
            </div>
            <Label className='correoRegistro' htmlFor="exampleEmail">
              Email
            </Label>
            <Input
              className='inputCorreoRegistro'
              type="email"
              name="email"
              defaultValue={usu_email}
              onChange={event => setEmail(event.target.value)}
              id="exampleEmail"
              placeholder="Introduzca su correo..."
              required
            />

            <Label className='contrasenaRegistro' htmlFor="examplePassword">
              Password
            </Label>
            <Input
              className='inputContrasenaRegistro'
              id="examplePassword"
              name="password"
              defaultValue={usu_password}
              onChange={event => setPassword(event.target.value)}
              placeholder="password"
              type="password"
              required
            />

            <Label className='nacimientoRegistro' htmlFor="exampleDate">
              Fecha de Nacimiento
            </Label>
            <DatePicker
              selected={usu_birthday}
              dateFormat="dd/MM/yyyy"
              maxDate={new Date("2012-01-01")}
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={70}
              className='form-control'
              id="exampleDate"
              name="date"
              defaultValue={usu_birthday}
              onChange={handleBirthdayChange}
              type="date"
              placeholderText='dd/MM/yyyy'
              required
            />

            <div className='RegisterButtons'>
              <Link to="/Account"><button className='botonVolverRegistro btnRegister'>Volver</button></Link>
              <button
                className='botonRegistrarseRegistro btnRegister'
                onClick={() => { handleSubmit() }}>
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export { Register }