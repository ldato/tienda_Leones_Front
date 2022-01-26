import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Buscador from "./components/Buscador";



function App() {
    const [venta, setVenta] = useState([]);
    
    return (
        <>
            <Container>
                <Row className="Alto-Fila">
                </Row>
                <Row className="altura-fila">
                    <Col className="centrar-contenido"><Buscador /></Col>
                </Row>
            </Container>
        </>
    )
}

export default App;
