import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

function Buscador(props) {
    const [producto, setProducto] = useState([{ descripcion: "", marca: "", talle: "", precio: 0, cantidad: 0 }]);
    let codigo;
    let addProd;
    const handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        codigo = value;
        //console.log(codigo);
    }

    const Consultar = async () => {
        // const response = await fetch("http://localhost:3001/consultas/articulosxid/" + codigo)
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data => {
        //         //setArticulo(data);
        //         if (data.length > 0) {                  
        //                props = data;                                 
        //         } else {
        //             console.log("No existe el articulo");
        //         }
        //     })
        const response = await fetch("http://localhost:3001/consultas/articulosxid/" + codigo);
        const producto = await response.json();
        addProd = producto;
        if (producto.length > 0) {
            console.log(producto);
            setProducto(producto);
            props.callback(producto);
        } else {
            console.log("No existe el codigo de producto");
            alert("No existe un producto con el código ingresado")
        }
    }

    const Agregar = () => {
       props.add(addProd)
    }


    return (
        <>
            <Container>
                <Row>
                    <Col className="centrar-contenido">
                        <input
                            type="text"
                            className="altura-maxima largo-input"
                            placeholder="Ingrese el codigo de producto"
                            name="consulta"
                            onChange={handleChange}
                        />
                        <Button
                            className="espacio-izquierdo altura-maxima"
                            onClick={Consultar}>Consultar
                        </Button>
                    </Col>
                </Row>
                <Row className="espacio-superior2">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Descripcion</th>
                                    <th>Marca</th>
                                    <th>Talle</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{producto[0].descripcion}</td>
                                    <td>{producto[0].marca}</td>
                                    <td>{producto[0].talle}</td>
                                    <td>$ {producto[0].precio}</td>
                                    <td>{producto[0].cantidad}</td>
                                    <td><Button onClick={Agregar}>Agregar a venta</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Buscador;