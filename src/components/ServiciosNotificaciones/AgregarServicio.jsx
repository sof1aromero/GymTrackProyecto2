import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const servicios = [
    { id: 1, titulo: 'Servicio 1', descripcion: 'Gym All' },
    { id: 2, titulo: 'Servicio 2', descripcion: 'Gym Pilates' },
    { id: 3, titulo: 'Servicio 3', descripcion: 'Gym Boxeo' },
];

const AgregarServicio = () => {
    return (
        <Container className="py-5 border rounded mt-4">
            <h4 className="text-xl mb-4 font-bold text-center">Elige el servicio que desees!</h4>

            <Row className="g-4">
                {servicios.map((servicio) => (
                    <Col key={servicio.id} md={4}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Title>{servicio.titulo}</Card.Title>
                                <Card.Subtitle className="mb-3 text-muted">{servicio.descripcion}</Card.Subtitle>

                                <div className="mb-3">
                                    <hr />
                                    <hr />
                                </div>

                                <Button variant="dark">Agregar +</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="text-center mt-4">
                <Button variant="dark">Ver más servicios</Button>
            </div>
        </Container>
    );
};

export default AgregarServicio;