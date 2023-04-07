import { useState } from 'react';
import axios from "axios";
import dataGet from "../fetch/DataFetching";
import { Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

function agregarParada(ruta, nombre, latitud, longitud) {
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

function eliminarParada() { }
function editarParada() { }

function StopsEdit() {
  const itemParada = dataGet("/StopsEdit");
  // const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className='containerUsers'>
        <h1 className='tituloUser'>
          Paradas
          <div className='rayaTitulo' />
        </h1>
        <div className='containerInternoUsers col'>
          <div className=" container">
            <div className='row mx-4 '>
              <Input
                type="text"
                className="form-control"
                placeholder="Buscar Parada..."
              />
              <button
                type="button"
                className="btn btn-primary col-6"
                onClick={toggle}
              >
                Agregar Parada
              </button>
            </div>
          </div>

          <div className="row m-4 userTable">
            <h3 className="mb-3">Parada</h3>
            <Table bordered className='userTable'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Latitud</th>
                  <th>Longitud</th>
                </tr>
              </thead>
              <tbody>
                {itemParada.map((itemParada, id) => (
                  <tr key={id}>
                    <td>{itemParada.id}</td>
                    <td>{itemParada.nombre}</td>
                    <td>{itemParada.latitud}</td>
                    <td>{itemParada.longitud}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={eliminarParada(itemParada.id)}
                      >
                        Eliminar
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={editarParada(itemParada.id)}
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
        <ModalHeader toggle={toggle}>Agregar Nuevo Parada</ModalHeader>
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
            <div className="col-md-12">
              <label for="latitud" className="form-label">
              Latitud:
              </label>
              <Input
                type="text"
                className="form-control"
                id="latitud"
                required
              />
            </div>
            <div className="col-md-12">
              <label for="longitud" className="form-label">
              Longitud:
              </label>
              <Input type="text" className="form-control" id="longitud" required />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            type="button"
            onClick={agregarParada("/Users")}
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

export {StopsEdit}