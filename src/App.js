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
    let newVenta = [];

    const addVenta = () => {
        setVenta(oldArray => [...oldArray, producto]);
    }

    const getResponse = (result) => {
        setProducto(result);
    }

    const removeVenta = (index, id) => {
       // let newVenta = [];
        //console.log(index);
        console.log(id);
        for (let i = 0; i < venta.length; i++) {
            // if (venta[i] !== index) {                
            //     newVenta.push(venta[i]);
            //     // console.log(newVenta);
            //     setVenta(newVenta);
            // } 
            if (i !== id) {
                newVenta.push(venta[i]);
                console.log(newVenta);
                setVenta(newVenta);
            }
            if (i===0 && id===0) {
                //newVenta.shift();
                newVenta.splice(0,1);
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
                        <h3>Detalle de venta</h3>
                    </Col>
                </Row>
                <Row className="espacio-superior3">
                    <Col>
                        <TablaProducto listaVenta={venta} borrar={removeVenta} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default App;
