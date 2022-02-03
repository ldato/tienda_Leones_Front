import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

function PruebaRedirect(props) {

    let navigate = useNavigate();
    const venta = props;

    const irHome = () => {
        navigate("/")
    }

    return (
        <>
            <Container>
                <Row className="espacio-superior2">
                    <Col xs={4}>

                    </Col>
                    <Col xs={4}>
                    <h1>Esta es la pagina a la que se redirecciona</h1>
                    <Button onClick={irHome}>Ir a home</Button>
                    </Col>
                   
                </Row>
            </Container>

        </>


    )
}

export default PruebaRedirect;