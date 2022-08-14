import React from "react";
import { order, filtrado } from "../../Store/Action/index";
import { connect } from "react-redux";
import './Filtrado.css'
function Filtrado({ order,  genres ,filtrado, }) {


  const handleSelect = (e) => {
    filtrado(e.target.value);
  };
 

  const handleSelect2= (e) => {
    order(e.target.value);
  };

  /*return (
    <div className='container-div'>
        <select  className="selectCont" onChange={handleSelect } name="" id="">
            <option className="option" value="default">TODOS...</option>
            <optgroup className="optionGroup" label="DataBase">
                <option className="option" value="DB">CREADOS</option>
            </optgroup>
            <optgroup className="optionGroup" label="API">
                <option className="option" value="API">API</option>
            </optgroup>              
            <optgroup className="optionGroup" label="GENRES">
                {genres && genres.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
            </optgroup>                
        </select>
        <select  className="selectCont" onChange={handleSelect2} name="" id="">
            <option className="option" value="default">ORDEN...</option>
            <optgroup className="optionGroup" label="Rating">
                <option className="option" value="asc">Mayor a Menor</option>
                <option className="option" value="desc">Menor a Mayor</option>
            </optgroup>               
            <optgroup className="optionGroup" label="Alphabetic">
                <option className="option" value="A-Z">A - Z</option>
                <option className="option" value="Z-A">Z - A</option>
            </optgroup>     
        </select>
    </div>
)
}*/

  return (
    <div className="container-div">
      <select className="selectCont" onChange= {handleSelect}name="" id="">
        <option className="option" value="default">
          Juegos...
        </option>
        <optgroup className="optionGroup" label="DataBase">
          <option className="option" value="DB">
            Creados
          </option>
        </optgroup>
        <optgroup className="optionGroup" label="Api">
          <option className="option" value="API">
            Api
          </option>
        </optgroup>
        </select>


      <select className="selectCont" onChange={handleSelect} name="" id="">
        <option className="option" value="default">
          Generos...
        </option>
        <optgroup className="optionGroup" label="GENRES">
        {genres && genres.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
        </optgroup>
      </select>


      <select className="selectCont" onChange={handleSelect2} name="" id="">
        <option className="option" value="default">
          Orden...
        </option>
        <optgroup className="optionGroup" label="Rating">
          <option className="option" value="asc">
            Mayor a Menor
          </option>
          <option className="option" value="desc">
            Menor a Mayor
          </option>
        </optgroup>
      </select>

      <select className="selectCont" onChange={handleSelect2} name="" id="">
        <option className="option" value="default">
          Alfabetico
        </option>
        <optgroup className="optionGroup" label="Ascendente-Descendente">
          <option className="option" value="A-Z">
            A - Z
          </option>
          <option className="option" value="Z-A">
            Z - A
          </option>
        </optgroup>
      </select>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        genres: state.genres
    }
}


export default connect(mapStateToProps,{order, filtrado})(Filtrado);
