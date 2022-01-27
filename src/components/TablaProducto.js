
 import React, {useState} from "react";
 import "bootstrap/dist/css/bootstrap.css";
 import "../App.css";
 import {Button, Row, Table} from "react-bootstrap";
 
 
 function TablaProducto(props) {
    //const prod = [props];
    let listar = props;
    
        <>
        {/* <td key={producto.idArticulo}>{producto.marca}</td>
        <td key={producto.idArticulo}>{producto.precio}</td>
        <td key={producto.idArticulo}>{producto.cantidad}</td> */}
        </>        
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
                            {/* <tr>
                            <td>{articulo.marca}</td>
                            <td>{articulo.precio}</td>
                            <td>{articulo.cantidad}</td> 
                            </tr> */}
                            
                            <tr>

                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td><Button>Agregar</Button></td>
                            </tr>
                            
                        </tbody>
                    </Table>
                </Row>
        )    
    
    
}

export default TablaProducto;

