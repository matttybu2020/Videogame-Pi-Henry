import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import start from "../../img/start.gif";

export default function Landing() {
  return (

    <>  
    <div className="Principal">
      <Link to="/videogames">
        <img className="LaImagen" src={start} alt="" />
      </Link>
    </div>
   <div className="contenedor">
  
   <h2>🕹️🕹️🎮 Welcome to VideoGames 🕹️🕹️🎮<span>&#160;</span></h2>

    
   </div>
   

    </>
  );

  
}
