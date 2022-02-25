import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
 
  <Auth0Provider
    domain="dev-grrrr64v.us.auth0.com"
    clientId="wEoR7eOnx58OS2E7JjumtxxUZFkHYqaz"
    //redirectUri={"http://localhost:3000/proyectos"} //Este toma para ir a la url que le dejamos en la plataforma localhost etc
    redirectUri={"https://admin-git-repo-frontend.herokuapp.com/proyectos"} //Este toma para ir a la url que le dejamos en la plataforma localhost etc

  >
    <React.StrictMode>
      <App />
    </React.StrictMode>

  </Auth0Provider>,

  document.getElementById("root")
);


