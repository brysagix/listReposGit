import React from 'react';
import "./footi.css";

function FooterComponent(){
return(

<nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark footi" >
  <div class="container-fluid">
     
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Terminos y condiciones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ayuda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PQRS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contáctanos</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
) 
};


export default FooterComponent;