import React from 'react'
//import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar-div">
                <NavLink to="/"><button>Landing</button></NavLink>
                <NavLink to="/videogames"><button>Videogames</button></NavLink>
                <NavLink to="/crearjuego"><button>CrearJuego</button></NavLink>
                <NavLink to="/about"><button>About</button></NavLink>
        </div>
    )
}

export default NavBar

    
