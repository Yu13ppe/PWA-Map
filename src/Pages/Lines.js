import React, { useState } from 'react'
import { Container, Row, Col, Button, Card, CardBody, CardHeader, CardFooter, CardTitle } from 'reactstrap';
import { lineList } from '../Components/LineList';
import { FaRegHeart, FaHeart, FaRegCommentDots } from "react-icons/fa";

function Lines() {
    const [like, setLike] = useState(false);

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
    )
}

export { Lines }