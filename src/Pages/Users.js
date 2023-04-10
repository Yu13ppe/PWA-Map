import { useState, useEffect } from 'react';
import axios from 'axios';
// import { DataGetFetching } from "../fetch/DataGetFetching";
// import { DataPostFetching } from "../fetch/DataPostFetching";
import { 
  //Button, Table,
   Modal, ModalHeader, ModalBody, 
   //ModalFooter, 
   Input } from 'reactstrap';

// function agregarUsuario(nombre, apellido, correo, birthday, cargo) {
//   console.log("1");
//   axios
//     .post(Users, {
//       nombre: nombre,
//       apellido: apellido,
//       correo: correo,
//       birthday: birthday,
//       cargo: cargo,
//     })
//     .then((res) => console.log("posting data", res))
//     .catch((err) => console.log(err));
// }

// function eliminarUsuario() { }
// function editarUsuario() { }

function Users() {

  // const [userData, setUserData] = useState({
  //   name: '',
  //   lastname: '',
  //   email: '',
  //   password: '',
  //   birthday: '',
  //   cargo: '',
  // });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   DataPostFetching('users', userData)
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserData({
  //     ...userData,
  //     [name]: value
  //   });
  // };

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [fdn, setFdn] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

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

    try {
      if (selectedUser) {
        await axios.put(`https://infotpm-backend-production.up.railway.app/Users/${selectedUser.id}`, {
          name,
          lastname,
          email,
          password,
          fdn,
          rol
        });

        setSelectedUser(null);
      } else {
        await axios.post('https://infotpm-backend-production.up.railway.app/Users/create', {
          name,
          lastname,
          email,
          password,
          fdn,
          rol
        });
      }

      setName('');
      setLastname('');
      setFdn('');
      setEmail('');
      setPassword('');
      setRol('');
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = user => {
    setSelectedUser(user);
    setName(user.name);
    setLastname(user.lastname);
    setFdn(user.fdn);
    setEmail(user.email);
    setPassword(user.password);
    setRol(user.rol);
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`https://infotpm-backend-production.up.railway.app/Users/${id}`);
      // fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  // const itemUsuario = DataGetFetching("Users");
  const [modal, setModal] = useState(false);

  // const handleClose = () => setShow(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className='containerUsers'>
        <h1 className='tituloUser'>
          Usuarios
          <div className='rayaTitulo' />
        </h1>
        <div className='containerInternoUsers col'>
          <div className=" container">
            <div className='row m-5 '>
              <Input
                type="text"
                className="form-control"
                placeholder="Buscar Usuario..."
              />
              <button
                type="button"
                className="btn btn-primary col-6"
                onClick={toggle}
              >
                Agregar Usuario
              </button>
            </div>
          </div>

          {/* <div className="row m-4 userTable">
            <Table bordered responsive className='userTable'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                  <th>Fecha de Nacimiento</th>
                  <th>Cargo</th>
                  <th>Funciones</th>
                </tr>
              </thead>
              <tbody>
                {itemUsuario.map((itemUsuario, id) => (
                  <tr key={id}>
                    <td>{itemUsuario.id}</td>
                    <td>{itemUsuario.name}</td>
                    <td>{itemUsuario.username}</td>
                    <td>{itemUsuario.correo}</td>
                    <td>{itemUsuario.fecha_nacimiento}</td>
                    <td>{itemUsuario.cargo}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={eliminarUsuario(itemUsuario.id)}
                      >
                        Eliminar
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={editarUsuario(itemUsuario.id)}
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div> */}
        </div>
      </div>

      <Modal className='mt-5' isOpen={modal} size='xl' centered toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Nuevo Usuario</ModalHeader>
        <ModalBody>
          {/* <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">
                Nombre:
              </label>
              <Input
                type="text"
                onChange={handleInputChange}
                className="form-control"
                id="nombre"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                apellido:
              </label>
              <Input
                type="text"
                className="form-control"
                onChange={handleInputChange}
                id="apellido"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Fecha de Nacimiento:
              </label>
              <Input
                type="date"
                className="form-control"
                onChange={handleInputChange}
                id="fdn"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Correo:
              </label>
              <Input
                type="text"
                className="form-control"
                onChange={handleInputChange}
                id="correo"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Contraseña:
              </label>
              <Input
                type="password"
                className="form-control"
                onChange={handleInputChange}
                id="contraseña"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                Cargo:
              </label>
              <div>
                <Input
                  type="radio"
                  id="Usuario"
                  onChange={handleInputChange}
                  name="Usuario"
                />
                <label>Usuario</label>
              </div>
              <div>
                <Input
                  type="radio"
                  id="Admin"
                  name="Admin"
                  onChange={handleInputChange}
                ></Input>
                <label>Admin</label>
              </div>
            </div>
          </div> */}

          <div>
            <form onSubmit={handleSubmit}>
              <label>
                Nombre:
                <input type="text" value={name} onChange={event => setName(event.target.value)} />
              </label>
              <label>
                Apellido:
                <input type="text" value={lastname} onChange={event => setLastname(event.target.value)} />
              </label>
              <label>
                Edad:
                <input type="text" value={fdn} onChange={event => setFdn(event.target.value)} />
              </label>
              <label>
                Email:
                <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
              </label>
              <label>
                Password:
                <input type="text" value={password} onChange={event => setPassword(event.target.value)} />
              </label>
              <label>
                rol:
                <input type="text" value={rol} onChange={event => setRol(event.target.value)} />
              </label>
              <button type="submit">Guardar</button>
            </form>
            <ul>
              {usuarios.map(user => (
                <li key={user.id}>
                  {user.nombre} 
                  {user.lastname} 
                  ({user.fdn})
                  {user.email}
                  {user.password}
                  {user.rol}
                  <button onClick={() => handleEdit(user)}>Editar</button>
                  <button onClick={() => handleDelete(user.id)}>Eliminar</button>
                </li>
              ))}
            </ul>
          </div>
        </ModalBody>
        {/* <ModalFooter>
          <Button
            type="button"
            onClick={handleSubmit}
            color="primary"
          >
            Guardar cambios
          </Button>
          <Button
            color="secondary"
            onClick={toggle}
          >
            Cancelar
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  )
}

export { Users }