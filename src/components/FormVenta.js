import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

function FormVenta(props) {

    let navigate = useNavigate();
    const [cliente, setCliente] = useState([{ nombre: "", apellido: "", telefono: "", direccion: "", email: "" }]);
    const { ventaProp } = props;
    const clienteVacio = [{ nombre: "", apellido: "", telefono: "", direccion: "", email: "" }];
    const [venta, setVenta] = useState([]);

    let suma = 0;

    for (let i = 0; i < ventaProp.length; i++) {
        suma = suma + (ventaProp[i][0].precio * ventaProp[i][0].cantidad);
    }

    let id;

    const handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        id = value;
        console.log(id);
    }

    //-----------------------------------------------------------------------

    useEffect(() => {
        setVenta(state => (ventaProp));
        console.log(ventaProp);
    });

    //------------------------------------------------------------------------

    const irHome = () => {
        navigate("/")
    }

    const ConsultarCliente = async () => {
        const response = await fetch("http://localhost:3001/consultas/cliente/" + id);
        const cliente = await response.json();
        if (cliente.length === 0) {
            alert("No se encontro un cliente con el DNI ingresado")
            setCliente(clienteVacio);
        } else {
            setCliente(cliente);
            console.log(cliente.length);
        }
    }

    const ConfirmarVenta = async () => {
        console.log("Cliente:");
        console.log(cliente);
        console.log("Venta: ");
        console.log(venta);
    }

    return (
        <>
            <Container>
                <Row className="altura-fila">
                </Row>
                <Row>
                    <Col className="centrar-contenido">
                        <input
                            type="number"
                            className="altura-maxima largo-input"
                            placeholder="ingresde DNI del comprador"
                            name="consulta"
                            onChange={handleChange}
                        />
                        <Button
                            className="espacio-izquierdo altura-maxima"
                            variant="success"
                            onClick={ConsultarCliente}>
                            Verificar Comprador
                        </Button>
                    </Col>
                </Row>
                <Row className="espacio-superior2">
                    <p className="negrita-grande">Datos del comprador</p>
                </Row>
                <Row>
                    <Col xs={6}>
                        <ul>
                            <li>Nombre: {cliente[0].nombre} </li>
                            <li>Apellido: {cliente[0].apellido} </li>
                            <li>Dirección: {cliente[0].direccion}</li>
                            <li>Telefono: {cliente[0].telefono}</li>
                            <li>Mail: {cliente[0].email}</li>
                        </ul>
                    </Col>
 
                </Row>
                <Row className="espacio-superior2">
                    <Col xs={6}>
                    <p className="negrita-grande">Detalle de Venta -------------- Total: $ {suma} </p>
                    </Col>
                    <Col>
                        <Button onClick={ConfirmarVenta}>Confirmar Venta</Button>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Descripcion</th>
                                    <th>Marca</th>
                                    <th>Talle</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {venta.map((articulo, id) => {
                                    return (
                                        <>
                                            <tr key={id}>
                                                {/* {console.log(id)} */}
                                                <td >{articulo[0].descripcion}</td>
                                                <td >{articulo[0].marca}</td>
                                                <td >{articulo[0].talle}</td>
                                                <td >$ {articulo[0].precio}</td>
                                                <td >{articulo[0].cantidad}</td>
                                            </tr>
                                        </>)
                                })}


                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </>


    )
}

export default FormVenta;