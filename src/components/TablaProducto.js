
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Button, Col, Row, Table } from "react-bootstrap";



function TablaProducto(props) {
    const { listaVenta } = props;
        
    const removeItem = (id) => {
        props.borrar(listaVenta[id], id);
        console.log(id);
    }

     return (
        
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
                        {listaVenta.map((articulo, id) => {
                            return (
                            <>
                                <tr key={id}>
                                    {/* {console.log(id)} */}
                                    <td >{articulo[0].descripcion}</td>
                                    <td >{articulo[0].marca}</td>
                                    <td >{articulo[0].talle}</td>
                                    <td >{articulo[0].precio}</td>
                                    <td >1</td>
                                    <td ><Button onClick={() => removeItem(id)}>Quitar</Button></td>
                                </tr>
                            </>)
                        })}


                    </tbody>
                </Table>
            </Col>
        </Row>
    )


}

export default TablaProducto;

