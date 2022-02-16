import { Table, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";


function Proyectos() {


  const [nombreRepo, setNombreRepo] = useState([]);
  const [userRepo, setUserRepo] = useState("");

  //const link ="brysagix";
  
  const getRepos = async () => {
    try {
      const response = await fetch("https://api.github.com/users/"+userRepo+"/repos"); //fetch es el que consume;
      const jsonResponse = await response.json();
      
      //const responseProducts = jsonResponse.data;

      const listProducts = jsonResponse.map((dato) => (
        <tr>
          <th scope="row">{dato.id} </th>
          <th scope="row">{dato.full_name} </th>
          <th scope="row">{dato.html_url} </th>
        </tr>
      ));


      setNombreRepo(listProducts); // Esto debe usarse para mandar el contenido al otro elemento de useState, osea quedaría guardado en product
      console.log(jsonResponse);
    } 
    
    catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    //getRepos();
  }, []);


  return (

    <div className="container">

    <h2>Ingrese el nombre del usuario dueño repositorio a buscar:</h2>
    <input
          className="form-control"
          name="personaje"
          type="text"
          onChange={(e) => setUserRepo(e.target.value)}
    />

    <br></br>
    <Button variant="primary" onClick={() => getRepos()}>Buscar</Button>
    <br></br>
    <br></br>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID del Repositorio</th>
            <th>Nombre del Repositorio</th>
            <th>URL</th>
            <th>Favorito</th>
         
          </tr>
        </thead>

        <tbody>{nombreRepo}</tbody>
  

        
      </Table>

      <Button variant="primary">Listar Favoritos</Button>

    </div>
  );
}


export default Proyectos;
