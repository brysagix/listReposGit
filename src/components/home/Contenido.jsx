import React from 'react';
import { Carousel, Container, Row, Col } from "react-bootstrap";

import CrearUsuario from '../usuarios/CrearUsuario';



function Contenido(){
return(

  <div>
  <Row >
    <Col sm={9}>
      <Carousel>
      <Carousel.Item>
        <img
          width={600} height={550} 
          className="d-block w-100"
          src={require("../../assets/images/git1.jpg").default}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          width={600} height={550} 
          className="d-block w-100"
          src={require("../../assets/images/git2.jpg").default}
          alt="Second slide"
        />
      </Carousel.Item>
      </Carousel>
    </Col>

  
    <Col sm={3}>   
      <CrearUsuario/>
    </Col>

  </Row>

</div>

)
};


export default Contenido;