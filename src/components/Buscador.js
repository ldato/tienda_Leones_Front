import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Button } from "react-bootstrap";

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
        
        <input 
        type="text" 
        className="altura-maxima largo-input" 
        placeholder="Ingrese el codigo de producto" 
        name="consulta"
        onChange={handleChange}
        />
        <Button className="espacio-izquierdo altura-maxima" onClick={Consultar} >Consultar</Button>
        </>
    )
}

export default Buscador;