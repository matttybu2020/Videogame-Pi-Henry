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
        <h1>đ¨âđģ Proyecto Individual đ¨âđģ</h1>
        <h1>đŽđšī¸đšī¸ Videogame đšī¸đšī¸đŽ</h1>
        <h1>Gonzalez Matias Enrique đ§âđģ</h1>
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
