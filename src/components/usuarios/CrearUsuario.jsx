import React, { useState, useEffect} from "react";

import { Link,Redirect,useHistory } from 'react-router-dom';


import {
  Button,
  Container,
  FormGroup,
  Form,
  Row,
  Col
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "@auth0/auth0-react";
import gmailButton from '../../assets/images/gmailButton.jpg'



function CrearUsuario() {

  let history=useHistory();
  //const [usuarios, setUsuarios] = useState([]);

  const [nombre, setNombre] = useState("");
  const [pass, setPassword] = useState("");

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {user,isAuthenticated}= useAuth0();

  

  return (
    <Container>
      <Form>
        <br />

        <img
          width={60}
          height={90}
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

        <Row>
          <Col xs={1} md={1} lg={1}></Col>

          <Col xs={12} md={12} lg={12}>
            <Button type="submit" color="primary" onClick={() => ingresar()}>
              Sign In
            </Button>{" "}
            <Button
              type="submit"
              variant="success"
              onClick={() => crearNuevoUsuario()}
            >
              Sign Up
            </Button>{" "}
          </Col>
        </Row>

        <br />
      </Form>

      <Row>
        <Col xs={11} md={11} lg={11}>
          <Button
            variant="outline-danger"
            onClick={() =>
              loginWithRedirect({ returnTo: "http://localhost:3000/proyectos" })
            }
          >
            Continue with Gmail
          </Button>
        </Col>
      </Row>
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
    if (
      localStorage.getItem("user") == nombre &&
      localStorage.getItem("password") == pass
    ) {
      alert("Estas autorizado");
      localStorage.setItem("authorized", "true");

      //Con esto podemos saldar a otra página desde un componente
      history.push("/proyectos");
    } else {
      alert("No estas autorizado");
      localStorage.setItem("authorized", "false");
    }
  }

  function loginCorreo() {
    alert("Ingresando");
    }


}

export default CrearUsuario;
