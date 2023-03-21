import React, { useState } from 'react'
import { Container, Row, Col, Button, Card, CardBody, CardHeader, CardFooter, CardTitle } from 'reactstrap';
import { lineList } from '../Components/LineList';
import { FaRegHeart, FaHeart, FaRegCommentDots } from "react-icons/fa";

function Perfil() {
  const [like, setLike] = useState(false);

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
          Jose Portillo
          <div className='rayaTituloP' />
        </h2>

        <p className='CorreoElectronico'>
          Aqui se ingresara el correo Electronico
        </p>
        <p className='numeroUsuario'>
          20 Años
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
                        <Button className="btn" type="button">
                          <FaRegCommentDots className="icon" />
                        </Button>
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
      </div>
    </div>
  )
}

export { Perfil }