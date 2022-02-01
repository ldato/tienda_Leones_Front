import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Buscador from "./components/Buscador";
import TablaProducto from "./components/TablaProducto";
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

    const removeVenta = (index) => {
        let newVenta = [];
        console.log(index);
        for (let i = 0; i < venta.length; i++) {
            if (venta[i] !== index) {                
                newVenta.push(venta[i]);
                // console.log(newVenta);
                setVenta(newVenta);
            } 

        }
    }

    return (
        <>
            <Container>
                <Row className="Alto-Fila">
                </Row>
                <Row className="altura-fila">
                    <Col xs={12} className="centrar-contenido"><Buscador callback={getResponse} add={addVenta} /></Col>
                </Row>
                <Row className="espacio-superior">
                    <Col>
                        <TablaProducto listaVenta={venta} borrar={removeVenta} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App;
