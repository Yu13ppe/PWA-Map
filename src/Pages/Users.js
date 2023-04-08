import { useState } from 'react';
import axios from "axios";
import dataGet from "../fetch/DataFetching";
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

function agregarUsuario(ruta, nombre, apellido, correo) {
  console.log("1");
  axios
    .post(ruta, {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
    })
    .then((res) => console.log("posting data", res))
    .catch((err) => console.log(err));
}

function eliminarUsuario() { }
function editarUsuario() { }

function Users() {

  const itemUsuario = dataGet("/Users");
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

          <div className="row m-4 userTable">
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
                    <td>{itemUsuario.nombre}</td>
                    <td>{itemUsuario.apellido}</td>
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
          </div>
        </div>
      </div>

      <Modal className='mt-5' isOpen={modal} size='xl' centered toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar Nuevo Usuario</ModalHeader>
        <ModalBody>
          <div className="row g-3">
            <div className="col-md-6">
              <label for="nombre" className="form-label">
                Nombre:
              </label>
              <Input
                type="text"
                className="form-control"
                id="nombre"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="apellido" className="form-label">
                apellido:
              </label>
              <Input
                type="text"
                className="form-control"
                id="apellido"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="fdn" className="form-label">
                Fecha de Nacimiento:
              </label>
              <Input type="date" className="form-control" id="fdn" required />
            </div>
            <div className="col-md-6">
              <label for="correo" className="form-label">
                Correo:
              </label>
              <Input
                type="text"
                className="form-control"
                id="correo"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="contraseña" className="form-label">
                Contraseña:
              </label>
              <Input
                type="password"
                className="form-control"
                id="contraseña"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="cargo" className="form-label">
                Cargo:
              </label>
              <div>
                <Input
                  type="radio"
                  id="Usuario"
                  name="Usuario"
                  value="Usuario"
                ></Input>
                <label for="Usuario">Usuario</label>
              </div>
              <div>
                <Input
                  type="radio"
                  id="Admin"
                  name="Admin"
                  value="Admin"
                ></Input>
                <label for="Admin">Admin</label>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            onClick={agregarUsuario("/Users")}
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
        </ModalFooter>
      </Modal>
    </div>
  )
}

export { Users }