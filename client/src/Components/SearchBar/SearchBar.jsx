import {React, useState} from 'react'
import { connect } from 'react-redux'
import {searchName ,getAllGames } from '../../Store/Action/index'
import './SearchBar.css'


 function SearchBar({searchName ,getAllGames}){

    const [input, setInput] = useState({buscar:''})

    const InputChange = function(e) {
        setInput({
        [e.target.name]: e.target.value
      });
  }

  const OnClick = () => {
    searchName(input.buscar)
      setInput({
          buscar: ''
      });
  }

  const OnClickAll = () => {
      getAllGames()
      setInput({
          buscar: ''
      });
  }


return (
    <div class="buscar">
        <input className="bar-btn"
          name="buscar"
          placeholder="Buscá tu juego..."
          onChange={InputChange}
          value={input.buscar}
          autoComplete="off"></input>
        <button  className="btn" onClick={OnClick}>Buscar</button>
        <button className="btn" onClick={OnClickAll}>Recargar</button>

    </div>
    

)

}

export default connect(null, {searchName ,getAllGames})(SearchBar)