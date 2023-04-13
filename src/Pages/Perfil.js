import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col, Button, Card, CardBody, CardHeader, CardFooter, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { FaRegHeart, FaHeart, FaRegCommentDots } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function NonStrictModal(props) {
  return (
      <Modal {...props}>
          {props.children}
      </Modal>
  );
}

function Perfil() {
  const location = useLocation();
  const [like, setLike] = useState(false);
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const toggle = () => setModal(!modal);
  const [selectedName, setSelectedName] = useState('');
  const [lineList, setListLine] = useState([]);
  const [com_idUser, setCom_idUser] = useState('');
  const [com_idLine, setCom_idLine] = useState('');
  const [com_comment, setCom_comment] = useState('');

  const handleShow = (name) => {
    setShow(true);
    setSelectedName(name);
};

const handleClose = () => {
    setShow(false);
};

  useEffect(() => {
    fetchListData();
  }, []);

  const fetchListData = async () => {
    try {
      const response = await axios.get('https://infotpm-backend-production.up.railway.app/Line');
      setListLine(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post(
        'https://infotpm-backend-production.up.railway.app/comment/create',
        {
          com_comment,
          com_idUser,
          com_idLine,
        }
      );

      setCom_comment('');
      setCom_idUser('');
      setCom_idLine('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = () => {
    setLike(!like);
  }

  return (
    <div>
      <div className='prueba'>
        <div className='circuloFace'>
        </div>
        <div className='circuloBody'>
        </div>
      </div>

      <div className='containerNombre'>
        <h2 className='nombreCuenta'>
          { location.state?.name || '' }
          <div className='rayaTituloP' />
        </h2>
        
        <p className='CorreoElectronico'>
        { location.state?.mail || '' }
        </p>
        <p className='numeroUsuario'>
        { location.state?.birthday || '' } Años
        </p>
      </div>
      <div className='containerBody'>
        <h3 className='titleRutasF'>
          Rutas Favoritas
          <div className='rayaTituloP' />
        </h3>
        <Container fluid className="contentP">
          <Row>
            {
              lineList.map(line => (
                <Col className='col' key={line.lin_id}>
                  <Card className="cardLine">
                    <CardHeader className="card-head">
                      id {line.lin_id}
                    </CardHeader>
                    <CardBody className="card-body">

                      <CardTitle className="card-tittle" onClick={() => handleShow(line.lin_name)}>
                        {line.lin_name}
                      </CardTitle>

                      <NonStrictModal className='mt-5' isOpen={show} size='xl' centered toggle={handleClose}>
                        <ModalHeader toggle={handleClose}>Visualización {selectedName}</ModalHeader>
                        <ModalBody>
                          Contenido del modal
                        </ModalBody>
                      </NonStrictModal>

                      <div className='lineButtons'>
                        <Button className="btn" type="button">
                          {
                            like ? (
                              <FaHeart className="icon" onClick={handleLike} />
                            ) : (
                              <FaRegHeart className="icon" onClick={handleLike} />
                            )
                          }
                        </Button>
                        <Button className="btn" type="button" onClick={toggle}>
                          <FaRegCommentDots className="icon" />
                        </Button>
                        <div className='Modal-comment'>
                          <Modal isOpen={modal} centered toggle={toggle}>
                            <ModalHeader toggle={toggle}>Comenta la Ruta</ModalHeader>
                            <ModalBody>
                              <Input
                                type="textarea"
                                name="text"
                                id="exampleText"
                                value={com_comment}
                                onChange={e => setCom_comment(e.target.value)}
                                placeholder="Realiza algún comentario que desees agregar acerca de esta ruta"
                                rows={5}
                              />
                            </ModalBody>
                            <ModalFooter>
                              <Button color="primary" onClick={handleSubmit}>
                                Enviar Comentario
                              </Button>{' '}
                              <Button color="secondary" onClick={toggle}>
                                Cancelar
                              </Button>
                            </ModalFooter>
                          </Modal>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter className="card-footer">
                      <div className='Horario'>
                        Horario: 7am - 8pm
                      </div>
                      <div className='Pasaje'>
                        Pasaje: {line.lin_price}Bs.
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    </div>
  )
}

export { Perfil }