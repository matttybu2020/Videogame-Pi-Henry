import React from "react";
import imagen from "../../img/imagen.gif";
import "./About.css";

import NavBar from "../NavBar/NavBar";

import Github from "../../img/Github.gif";
import Linkedin from "../../img/Linkedin.gif";

export default function About() {
  return (
    <>
      <NavBar />

      <div className="con-about">
        <h1>👨‍💻 Proyecto Individual 👨‍💻</h1>
        <h1>🎮🕹️🕹️ Videogame 🕹️🕹️🎮</h1>
        <h1>Gonzalez Matias Enrique 🧑‍💻</h1>
        <div className="div-foto">
          <img src={imagen} alt="foto"></img>
        </div>
        <div className="homeLinks">
          <a href="https://github.com/matttybu2020" target="_blank">
            <img className="imgGit" src={Github} alt="lol" />
          </a>
          <a
            href="https://www.linkedin.com/in/matias-enrique-g/"
            target="_blank"
          >
            <img className="imgLink" src={Linkedin} alt="lol" />
          </a>
        </div>
      </div>
    </>
  );
}
