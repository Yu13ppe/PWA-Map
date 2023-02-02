import React, { useState } from 'react'
import {Container, Row, Col, Button, Card, CardBody, CardHeader, CardFooter, CardText, CardTitle } from 'reactstrap';
import { lineList } from '../Components/LineList';
import { FaRegHeart, FaHeart } from "react-icons/fa";

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
                        <Col key={line.id}>
                            <Card className="card">
                                <CardHeader className="card-head">
                                    id {line.id}
                                </CardHeader>
                                <CardBody className="card-body">
                                    <CardTitle className="card-tittle">
                                        {line.name}
                                    </CardTitle>
                                </CardBody>
                                <CardFooter className="card-footer">
                                    <Button className="btn" type="button">
                                        {
                                            like ? (
                                                <FaHeart className="icon" onClick={handleLike} />
                                            ) : (
                                                <FaRegHeart className="icon" onClick={handleLike} />
                                            )
                                        }
                                    </Button>
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