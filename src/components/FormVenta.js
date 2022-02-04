import React, {useState} from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

function FormVenta(props) {
    
    let navigate = useNavigate();
    const [cliente, setCliente] = useState([{nombre: "", apellido: "", telefono: "", direccion: "", email: ""}]);
    const venta = props;
    
    let id;

    const handleChange = (e) => {
        e.preventDefault();
        const {value} = e.target;
        id = value;
        console.log(id);
    }

    const irHome = () => {
        navigate("/")
    }

    const ConsultarCliente = async () => {        
        const response = await fetch("http://localhost:3001/consultas/cliente/" + id);
        const cliente = await response.json();
        setCliente(cliente);
        console.log(cliente);
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
                    <ul>
                        <li>Nombre: {cliente[0].nombre} </li>
                        <li>Apellido: {cliente[0].apellido} </li>
                        <li>Dirección: {cliente[0].direccion}</li>
                        <li>Telefono: {cliente[0].telefono}</li>
                        <li>Mail: {cliente[0].email}</li>
                    </ul>
                </Row>
            </Container>

        </>


    )
}

export default FormVenta;