//import './App.css';

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "../src/Components/About/About.jsx";
import Landing from "../src/Components/Landing/Landing.jsx";
import CrearJuego from "../src/Components/CrearJuego/CrearJuego.jsx";
import Videogames from "../src/Components/Videogames/Videogames.jsx";
import JuegoDetalles from "../src/Components/JuegoDetalles/JuegoDetalles.jsx";
import Page404 from "../src/Components/Page404/Page404.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/videogames" component={Videogames} />
        <Route exact path="/crearjuego" component={CrearJuego} />
        <Route exact path="/videogame/:idVideogame" component={JuegoDetalles} />
        <Route exact path="/about" component={About} />
        <Route exact path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
