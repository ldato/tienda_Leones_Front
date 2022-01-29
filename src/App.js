import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Buscador from "./components/Buscador";
// import TablaProducto from "./components/TablaProducto";



function App(props) {
    const [venta, setVenta] = useState([]);
    const [producto, setProducto] = useState("");

    const addVenta = () => {
        setVenta(oldArray => [...oldArray, producto]);
    }

    const getResponse = (result) => {
        setProducto(result);
    }
    
    
    return (
        <>
            <Container>
                <Row className="Alto-Fila">
                </Row>
                <Row className="altura-fila">
                    <Col className="centrar-contenido"><Buscador callback={getResponse} add={addVenta}/></Col>
                </Row>
            </Container>
        </>
    )
}

export default App;
