
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Button, Row, Table } from "react-bootstrap";


function TablaProducto(props) {
       const [articulo, setArticulo] = useState("");
       const getArticulo = async (props) => {
           let set = await props;
           return set;
       }
    return (
        // <tr>{listar}</tr>
        <Row className="espacio-superior2">
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
                        <td>{articulo.descripcion}</td>
                        <td>{articulo.marca}</td>
                        <td>{articulo.talle}</td>
                        <td>{articulo.precio}</td>
                        <td>{articulo.cantidad}</td>
                        <td><Button>Agregar</Button></td>
                    </tr>
                </tbody>
            </Table>
        </Row>
    )


}

export default TablaProducto;

