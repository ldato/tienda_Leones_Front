import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Button, Col, Row } from "react-bootstrap";

function Buscador() {

    let codigo = "";
    const handleChange = (e) => {
        e.preventDefault();
        const {value} = e.target;
        codigo = value;
        console.log(codigo);
    }

    const Consultar = async () => {
        await fetch("http://localhost:3001/consultas/articulosxid/"+codigo)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.length>0) {
                console.log(data);
            } else {
                console.log("No existe el articulo");
            }
            
        })
    }
    return (
        <>
        <Row>
            <Col>
            <input 
        type="text" 
        className="altura-maxima largo-input" 
        placeholder="Ingrese el codigo de producto" 
        name="consulta"
        onChange={handleChange}
        />
        <Button className="espacio-izquierdo altura-maxima" onClick={Consultar} >Consultar</Button>
            </Col>
        </Row>
        
        </>
    )
}

export default Buscador;