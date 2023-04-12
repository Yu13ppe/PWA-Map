import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Label, Input } from 'reactstrap';

function Register() {
  const [usu_name, setName] = useState('');
  const [usu_lastName, setLastname] = useState('');
  const [usu_birthday, setFdn] = useState('');
  const [usu_email, setEmail] = useState('');
  const [usu_password, setPassword] = useState('');
  const usu_rol = 'Usuario';
  const [confPass, setConfPass] = useState('')
  const [error, setError] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      if(usu_password !== confPass){
        setError('Las contraseñas no coinciden')

      } else {
      await axios.post(
        'https://infotpm-backend-production.up.railway.app/Users/create',
        {
          usu_name,
          usu_lastName,
          usu_email,
          usu_birthday,
          usu_password,
          usu_rol
        });
      }

      setName('');
      setLastname('');
      setFdn('');
      setEmail('');
      setPassword('');
      setConfPass('');

    } catch (error) {
      console.log(error);
    }
  };

  // const pulsarRegister = () => {
  //   let expReg = /^(([^<>()[]\.,;:\s@”]+(.[^<>()[]\.,;:\s@”]+)*)|(“.+”))@(([[0–9]{1,3}.[0–9]{1,3}.[0–9]{1,3}.[0–9]{1,3}])|(([a-zA-Z-0–9]+.)+[a-zA-Z]{2,3}))$/

  //   if (!usu_name.checkValidity()) {
  //     setError('Coloque letras en el campo del nombre');
  //   } else if (usu_name === '') {
  //     setError("Rellene el campo de nombre");
  //   } else if (usu_lastName === '') {
  //     setError('Rellene el campo de apellido');
  //   } else if (!usu_lastName.checkValidity()) {
  //     setError("Solo coloque letras en el campo del apellido");
  //   } else if (!expReg.test(usu_email.value)) {
  //     setError("Coloque un correo valido");
  //   } else if (usu_password === '') {
  //     setError("Complete el campo de contraseña");
  //   } else if (confPass === '') {
  //     setError("Complete el campo de confirmar contraseña");
  //   } else if (usu_password !== confPass) {
  //     setError("Las contraseñas no coinciden")
  //   } else if (usu_birthday === '') {
  //     setError("Complete el campo de Fecha de Nacimiento");
  //   } else if (
  //     usu_name.checkValidity() &&
  //     usu_lastName.checkValidity() &&
  //     expReg.test(usu_email.value) &&
  //     usu_password !== '' &&
  //     confPass !== '' &&
  //     usu_password === confPass 
  //   ) {
  //     handleSubmit();
  //   }
  // }

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
                  placeholder="Introduzca su Nombre"
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
                  placeholder="Introduzca su Apellido"
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
              placeholder="Introduzca su correo"
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
            {error && <div color='red'>{error}</div>}

            <Label className='confirmarContrasenaRegistro' htmlFor="exampleConfirmPassword">
              Confirm Password
            </Label>
            <Input
              className='inputConfirmarContrasenaRegistro'
              id="exampleConfirmPassword"
              name="confirmPassword"
              defaultValue={confPass}
              onChange={event => setConfPass(event.target.value)}
              placeholder="password"
              type="password"
              required
            />
            {error && <div color='red'>{error}</div>}


            <Label className='nacimientoRegistro' htmlFor="exampleDate">
              Fecha de Nacimiento
            </Label>
            <Input
              className='inputDiaRegistro'
              id="exampleDate"
              name="date"
              defaultValue={usu_birthday}
              onChange={event => setFdn(event.target.value)}
              type="date"
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

// import React, { useState } from 'react'
// import axios from 'axios'
// import { Link } from "react-router-dom";
// import { Label, Input, FormFeedback } from 'reactstrap';

// function Register() {
//   const [usu_name, setName] = useState('');
//   const [usu_lastName, setLastname] = useState('');
//   const [usu_birthday, setFdn] = useState('');
//   const [usu_email, setEmail] = useState('');
//   const [usu_password, setPassword] = useState('');
//   const [usu_rol, setRol] = useState('');
//   const [confPass, setConfPass] = useState('')
//   const [error, setError] = useState('');
//   const [nameError, setNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   function validateName(value) {
//     const regex = /^[a-zA-Z]+$/;
//     if (!value || value.length === 0) {
//       return 'Este campo es obligatorio';
//     }
//     if (!regex.test(value)) {
//       return 'Solo se permiten letras';
//     }
//     return '';
//   }

//   function validateEmail(value) {
//     const regex = /^\S+@\S+\.\S+$/;
//     if (!value || value.length === 0) {
//       return 'Este campo es obligatorio';
//     }
//     if (!regex.test(value)) {
//       return 'Ingrese un correo electrónico válido';
//     }
//     return '';
//   }

//   function validatePassword(password, confirmPassword) {
//     if (!password || password.length === 0) {
//       return 'Este campo es obligatorio';
//     }
//     if (password !== confirmPassword) {
//       return 'Las contraseñas no coinciden';
//     }
//     return '';
//   }

//   const handleSubmit = async event => {
//     event.preventDefault();

//     // Validar el nombre y el apellido
//     const nameValid = validateName(usu_name);
//     const lastNameValid = validateName(usu_lastName);

//     if (!nameValid || !lastNameValid) {
//       setError('Nombre y apellido solo pueden contener letras');
//       return;
//     }

//     if (nameError || lastNameError) {
//       setError('Nombre y apellido solo pueden contener letras');
//       return;
//     }
    

//     // Validar el correo electrónico
//     const emailValid = validateEmail(usu_email);

//     if (!emailValid) {
//       setError('Correo electrónico inválido');
//       return;
//     }

//     // Validar que la contraseña sea igual a la confirmación de contraseña
//     if (usu_password !== confPass) {
//       setError('Las contraseñas no coinciden');
//       return;
//     }

//     try {
//       await axios.post(
//         'https://infotpm-backend-production.up.railway.app/Users/create',
//         {
//           usu_name,
//           usu_lastName,
//           usu_email,
//           usu_birthday,
//           usu_password,
//           usu_rol
//         });

//       setName('');
//       setLastname('');
//       setFdn('');
//       setEmail('');
//       setPassword('');
//       setRol('');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // const pulsarRegister = () => {
//   //   let expReg = /^(([^<>()[]\.,;:\s@”]+(.[^<>()[]\.,;:\s@”]+)*)|(“.+”))@(([[0–9]{1,3}.[0–9]{1,3}.[0–9]{1,3}.[0–9]{1,3}])|(([a-zA-Z-0–9]+.)+[a-zA-Z]{2,3}))$/

//   //   if (!usu_name.checkValidity()) {
//   //     setError('Coloque letras en el campo del nombre');
//   //   } else if (usu_name === '') {
//   //     setError("Rellene el campo de nombre");
//   //   } else if (usu_lastName === '') {
//   //     setError('Rellene el campo de apellido');
//   //   } else if (!usu_lastName.checkValidity()) {
//   //     setError("Solo coloque letras en el campo del apellido");
//   //   } else if (!expReg.test(usu_email.value)) {
//   //     setError("Coloque un correo valido");
//   //   } else if (usu_password === '') {
//   //     setError("Complete el campo de contraseña");
//   //   } else if (confPass === '') {
//   //     setError("Complete el campo de confirmar contraseña");
//   //   } else if (usu_password !== confPass) {
//   //     setError("Las contraseñas no coinciden")
//   //   } else if (usu_birthday === '') {
//   //     setError("Complete el campo de Fecha de Nacimiento");
//   //   }

//   //   if (
//   //     usu_name.checkValidity() &&
//   //     usu_lastName.checkValidity() &&
//   //     expReg.test(usu_email.value) &&
//   //     usu_password !== '' &&
//   //     confPass !== '' &&
//   //     usu_password === confPass 
//   //   ) {
//   //     handleSubmit();
//   //   }
//   // }

//   // const handleInputName = (event) => {
//   //   const { value } = event.target;
//   //   const regex = /^[a-zñA-ZÑ\s]*$/;
//   //   if (regex.test(value) && value.length <= 64) {
//   //     setName(value);
//   //   } else if (!value) {
//   //     setName("");
//   //   };
//   // };

//   return (
//     <div>
//       <div className='containerInternoRegistro'>
//         <h1 className='titulo'>
//           Registrar Usuario
//           <div className='rayaTitulo' />
//         </h1>
//         <div className='containerInformacionRegistro'>
//           <form onSubmit={handleSubmit} className='Form'>
//             <div className='FormName'>
//               <div className='Nombre'>
//                 <Label className='nombreRegistro' htmlFor="exampleName">
//                   Nombre
//                 </Label>
//                 <Input
//                   className='inputNombreRegistro'
//                   type="text"
//                   name="Name"
//                   defaultValue={usu_name}
//                   onChange={event => {
//                     setName(event.target.value);
//                     setNameError(validateName(event.target.value));
//                     setError('');
//                   }}
//                   id="exampleName"
//                   placeholder="Introduzca su Nombre"
//                   maxLength="48"
//                   required
//                 />
//                 {nameError && <FormFeedback color='red'>{nameError}</FormFeedback>}
//               </div>
//               <div className='Apellido'>
//                 <Label className='apellidoRegistro' htmlFor="exampleApellido">
//                   Apellido
//                 </Label>
//                 <Input
//                   className='inputApellidoRegistro'
//                   type="text"
//                   name="Apellido"
//                   defaultValue={usu_lastName}
//                   onChange={event => {
//                     setLastname(event.target.value);
//                     setLastNameError(validateName(event.target.value));
//                     setError('');
//                   }}
//                   id="exampleApellido"
//                   placeholder="Introduzca su Apellido"
//                   pattern="^[A-Za-z]+$"
//                   maxLength="48"
//                   required
//                 />
//                 {lastNameError && <div color='red'>{lastNameError}</div>}

//               </div>
//             </div>
//             <Label className='correoRegistro' htmlFor="exampleEmail">
//               Email
//             </Label>
//             <Input
//               className='inputCorreoRegistro'
//               type="email"
//               name="email"
//               defaultValue={usu_email}
//               onChange={event => {
//                 setEmail(event.target.value);
//                 setEmailError(validateEmail(event.target.value));
//                 setError('');
//               }}
//               id="exampleEmail"
//               placeholder="Introduzca su correo"
//             />
//             {emailError && <FormFeedback color='red'>{emailError}</FormFeedback>}
//             <Label className='contrasenaRegistro' htmlFor="examplePassword">
//               Password
//             </Label>
//             <Input
//               className='inputConfirmarContrasenaRegistro'
//               id="examplePassword"
//               name="Password"
//               defaultValue={usu_password}
//               onChange={event => {
//                 setPassword(event.target.value);
//                 setPasswordError(validatePassword(usu_password, event.target.value));
//               }}
//               placeholder="password"
//               type="password"
//             />
//             {passwordError && <FormFeedback color='red'>{passwordError}</FormFeedback>}

//             <Label className='confirmarContrasenaRegistro' htmlFor="exampleConfirmPassword">
//               Confirm Password
//             </Label>
//             <Input
//               className='inputConfirmarContrasenaRegistro'
//               id="exampleConfirmPassword"
//               name="confirmPassword"
//               defaultValue={confPass}
//               onChange={event => {
//                 setConfPass(event.target.value);
//                 setPasswordError(validatePassword(usu_password, event.target.value));
//                 setError('');
//               }}
//               placeholder="password"
//               type="password"
//             />
//             {passwordError && <FormFeedback color='red'>{passwordError}</FormFeedback>}

//             <Label className='nacimientoRegistro' htmlFor="exampleDate">
//               Fecha de Nacimiento
//             </Label>
//             <Input
//               className='inputDiaRegistro'
//               id="exampleDate"
//               name="date"
//               defaultValue={usu_birthday}
//               onChange={event => setFdn(event.target.value)}
//               type="date"
//             />
//             {error && <FormFeedback color='red'>{error}</FormFeedback>}

//             <div className='RegisterButtons'>
//               <Link to="/Account"><button className='botonVolverRegistro btnRegister'>Volver</button></Link>
//               <button
//                 className='botonRegistrarseRegistro btnRegister'
//                 onClick={() => { handleSubmit() }}>
//                 Registrarse
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export { Register }