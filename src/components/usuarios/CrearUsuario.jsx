import React, { useState, useEffect,Link} from "react";
import {
  Button,
  Container,
  FormGroup,
  Form
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function CrearUsuario() {
  //const [usuarios, setUsuarios] = useState([]);

  const [nombre, setNombre] = useState("");
  const [pass, setPassword] = useState("");
  

  return (
    <Container>

      <Form>
        <br />
 
        <img
          width={60} height={90} 
          className="d-block w-100"
          src={require("../../assets/images/iconGit.jpeg").default}
          alt="Second slide"
        />

      <br />
      <br />
      <FormGroup>
        <label>Nombre de Usuario:</label>
        <input
          className="form-control"
          name="personaje"
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          placeholder={nombre}
        />
      </FormGroup>

      <FormGroup>
        <label>Password:</label>
        <input
          className="form-control"
          name="personaje"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder={pass}
        />
      </FormGroup>

   
      <br />
      <FormGroup>
      <Button type="submit" color="primary" onClick={() => ingresar()}>
        Iniciar sesión
      </Button>{" "}
      </FormGroup>

      <br />
      <FormGroup>
      <Button type="submit" variant="success" onClick={() => crearNuevoUsuario()} >
        Crear nuevo usuario
      </Button>{" "}
      </FormGroup>

     </Form>

    </Container>
  );


  function crearNuevoUsuario() {
   
    alert("Usuario Creado");
    localStorage.setItem("user",nombre);
    localStorage.setItem("password",pass);
    setNombre("");
    setPassword("");
  }
  
  function ingresar() {
    alert("Ingresando");
    if(localStorage.getItem("user")==nombre && localStorage.getItem("password")==pass)
    {
      alert("Estas autorizado");
      localStorage.setItem("authorized","true");}
    else{
      alert("No estas autorizado");
      localStorage.setItem("authorized", "false");
    }
  }

}

export default CrearUsuario;
