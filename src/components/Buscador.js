import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function Buscador(props) {
    const [producto, setProducto] = useState();
    let codigo = "";
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
            if (producto.length>0) {
                console.log(producto);
                setProducto(producto);   
                props.callback(producto)          
            } else {
                console.log("No existe el codigo de producto");
            }            
    }

    // const Setear = () => {
    //     props.callback(producto);
    // }

      
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

            </Container>
        </>
    )
}

export default Buscador;