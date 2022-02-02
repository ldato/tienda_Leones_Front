import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Button, Col, Row } from "react-bootstrap";


function TotalVenta(props) {
    const { listaVender } = props;
    let suma = 0;

    for (let i = 0; i < listaVender.length; i++) {
        suma = suma + listaVender[i][0].precio;
        console.log(listaVender);
    }


    return (

        <Row className="espacio-superior3">
            <Col xs={6}>
                <h3>Total a cobrar: ${suma}</h3>
            </Col>
            <Col className="centrar-contenido">
                <Button variant="success" size="lg">Realizar Venta</Button>
            </Col>
        </Row>

    )
}

export default TotalVenta;