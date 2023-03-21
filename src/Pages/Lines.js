import React, { useState } from 'react'
import { Container, Row, Col, Button, Card, CardBody, CardHeader, CardFooter, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { lineList } from '../Components/LineList';
import { FaRegHeart, FaHeart, FaRegCommentDots } from "react-icons/fa";

function Lines() {
    const [like, setLike] = useState(false);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleLike = () => {
        setLike(!like);
    }

    return (
        <Container fluid className="content">
            <Row>
                {
                    lineList.map(line => (
                        <Col className='col' key={line.id}>
                            <Card className="cardLine">
                                <CardHeader className="card-head">
                                    id {line.id}
                                </CardHeader>
                                <CardBody className="card-body">
                                    <CardTitle className="card-tittle">
                                        {line.name}
                                    </CardTitle>
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
                                                        placeholder="Realiza algún comentario que desees agregar acerca de esta ruta"
                                                        rows={5}
                                                    />
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button color="primary" onClick={toggle}>
                                                        Envair Comentario
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
                                        Horario: {line.horario}
                                    </div>
                                    <div className='Pasaje'>
                                        Pasaje: 10Bs.
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export { Lines }