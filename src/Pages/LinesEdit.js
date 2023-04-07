import { useState } from 'react';
import axios from "axios";
import dataGet from "../fetch/DataFetching";
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

function agregarLinea(ruta, nombre, latitud, longitud) {
  console.log("1");
  axios
    .post(ruta, {
      nombre: nombre,
      latitud: latitud,
      longitud: longitud,
    })
    .then((res) => console.log("posting data", res))
    .catch((err) => console.log(err));
}

function eliminarLinea() { }
function editarLinea() { }

function LinesEdit() {
  const itemLinea = dataGet("/LinesEdit");
  // const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className='containerUsers'>
        <h1 className='tituloUser'>
          Lineas
          <div className='rayaTitulo' />
        </h1>
        <div className='containerInternoUsers col'>
          <div className=" container">
            <div className='row mx-4 '>
              <Input
                type="text"
                className="form-control"
                placeholder="Buscar Linea..."
              />
              <button
                type="button"
                className="btn btn-primary col-6"
                onClick={toggle}
              >
                Agregar Linea
              </button>
            </div>
          </div>

          <div className="row m-4 userTable">
            <h3 className="mb-3">Linea</h3>
            <Table bordered className='userTable'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Latitud (Inicio)</th>
                  <th>Longitud (Inicio)</th>
                  <th>Latitud (Llegada)</th>
                  <th>Longitud (Llegada)</th>
                </tr>
              </thead>
              <tbody>
                {itemLinea.map((itemLinea, id) => (
                  <tr key={id}>
                    <td>{itemLinea.id}</td>
                    <td>{itemLinea.nombre}</td>
                    <td>{itemLinea.latitudI}</td>
                    <td>{itemLinea.longitudI}</td>
                    <td>{itemLinea.latitudL}</td>
                    <td>{itemLinea.longitudL}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={eliminarLinea(itemLinea.id)}
                      >
                        Eliminar
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={editarLinea(itemLinea.id)}
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
        <ModalHeader toggle={toggle}>Agregar Nuevo Linea</ModalHeader>
        <ModalBody>
          <div className="row g-3">
            <div className="col-md-12">
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
              <label for="latitud" className="form-label">
                Latitud (Punto de Inicio):
              </label>
              <Input
                type="text"
                className="form-control"
                id="latitud"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="longitud" className="form-label">
                Longitud Punto de Inicio:
              </label>
              <Input
                type="text"
                className="form-control"
                id="longitud"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="latitud" className="form-label">
                Latitud (Punto de Llegada):
              </label>
              <Input
                type="text"
                className="form-control"
                id="latitud"
                required
              />
            </div>
            <div className="col-md-6">
              <label for="longitud" className="form-label">
                Longitud Punto de Llegada:
              </label>
              <Input
                type="text"
                className="form-control"
                id="longitud"
                required
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            onClick={agregarLinea("/Users")}
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

export { LinesEdit }