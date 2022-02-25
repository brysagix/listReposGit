import { Table, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import logoNoFavorito from '../../assets/images/star1.png'
import logoFavorito from '../../assets/images/star2.png'


function Proyectos() {

  const usuario= localStorage.getItem("user");

  const [nombreRepo, setNombreRepo] = useState([]);
  const [userRepo, setUserRepo] = useState(localStorage.getItem("user"));
  
  const colocarFavorito = async (nombreAgregado) => {

    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              nombreRepo: nombreAgregado, 
            })
        };

        fetch("http://localhost:3001/add-favorito", requestOptions)
            .then(response => response.json())
            //.then(data => setRepoFavorito(data.nombreRepo));
    } 
    
    catch (error) {
    console.log(error);
    }
  };


  const colocarNoFavorito = async (nombreAgregado) => {

    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              nombreRepo: nombreAgregado, 
            })
        };

        fetch("http://localhost:3001/add-Nofavorito", requestOptions)
            .then(response => response.json())
    } 
    
    catch (error) {
    console.log(error);
    }
  };


  const quitarFavorito = async (nombreQuitado) => {

    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              nombreRepo: nombreQuitado, 
            })
        };

        fetch("http://localhost:3001/delete-favorito", requestOptions)
            .then(response => response.json())
    } 
    
    catch (error) {
    console.log(error);
    }
  };


  const getRepos = async () => {
    try {
      const response = await fetch("https://api.github.com/users/"+userRepo+"/repos"); //fetch es el que consume;
      const jsonResponse = await response.json();
      
      const listProducts = jsonResponse.map((dato) => (
        colocarNoFavorito(dato.full_name)
      ));
    } 

    catch (error) {
      console.log(error);
    }

    getTodosRepos();
  };


  const getTodosRepos = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-Todos"); //fetch es el que consume;
      const jsonResponse = await response.json();
      const responseProducts = jsonResponse.data;

      const listProducts = responseProducts.map((dato) => (
        <tr>
          <th scope="row">{dato.nombreRepo} </th>
          <td>
            <Button
              key={dato.nombreRepo}
              color="primary"
              onClick={() => handlerEstablecerFavorito(dato.nombreRepo)}
            >
              {dato.esFavor == 1 ? (
                <img
                  src={logoFavorito}
                  id={dato.nombreRepo}
                  width={20}
                  height={20}
                />
              ) : (
                <img
                  src={logoNoFavorito}
                  id={dato.nombreRepo}
                  width={20}
                  height={20}
                />
              )}
            </Button>{" "}

          </td>
        </tr>
      ));

       setNombreRepo(listProducts);
    } 
    
    catch (error) {
      console.log(error);
    }
  };



  const getReposFavoritos = async () => {
    try {
      const response = await fetch("http://localhost:3001/get-favoritos"); //fetch es el que consume;
      const jsonResponse = await response.json();
      const responseProducts = jsonResponse.data;

      const listProducts = responseProducts.map((dato) => (
    
        <tr>
          <th scope="row">{dato.nombreRepo} </th>

          <td>
            <Button
              key={dato.nombreRepo}
              color="primary"
              onClick={() => handlerEstablecerFavorito(dato.nombreRepo)}
            >
              {dato.esFavor == 1 ? (
                <img
                  src={logoFavorito}
                  id={dato.nombreRepo}
                  width={20}
                  height={20}
                />
              ) : (
                <img
                  src={logoNoFavorito}
                  id={dato.nombreRepo}
                  width={20}
                  height={20}
                />
              )}
            </Button>{" "}

          </td>
          
        </tr>

      ));
      setNombreRepo(listProducts); // Esto debe usarse para mandar el contenido al otro elemento de useState, osea quedaría guardado en product
    } 
    
    catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
  }, []);


  return (
    <div className="container">
      <h2>Nombre del usuario dueño repositorio a buscar:</h2>
      <input
        className="form-control"
        name="personaje"
        type="text"
        onChange={(e) => setUserRepo(e.target.value)}
        placeholder={userRepo}
      />

      <br></br>
      <Button variant="primary" onClick={() => handlerMostrarRepos()}>
        Buscar
      </Button>
      <br></br>
      <br></br>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombre del Repositorio</th>
            <th>Favorito</th>
          </tr>
        </thead>

        <tbody>{nombreRepo}</tbody>
      </Table>

      <Button variant="primary" onClick={() => getReposFavoritos()}>
        Listar Favoritos
      </Button>

      <br />
      <br />
      <br />
    </div>
  );


  function handlerEstablecerFavorito(nombreRepo) {
    if(document.getElementById(nombreRepo).src===logoNoFavorito){
      document.getElementById(nombreRepo).src=logoFavorito;
      colocarFavorito(nombreRepo);
    }
    else{
      document.getElementById(nombreRepo).src=logoNoFavorito;
      quitarFavorito(nombreRepo);
    }
  }

  function handlerMostrarRepos() {
    getRepos();
    //getTodosRepos();
  }


}


export default Proyectos;
