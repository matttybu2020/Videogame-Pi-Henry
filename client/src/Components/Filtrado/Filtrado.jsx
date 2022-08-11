import React from 'react'

 function Filtrado (){
    
    return(
        <div className='container-div'>
            <select  className="selectCont"  name="" id="">
                <option className="option" value="default">Juegos...</option>
                <optgroup className="optionGroup" label="DataBase">
                    <option className="option" value="DB">Creados</option>
                </optgroup>
                <optgroup className="optionGroup" label="Api">
                    <option className="option" value="API">Api</option>
                </optgroup>  
                </select>     
                <select>
                <option className="option" value="default">Generos...</option>
                <optgroup className="optionGroup" label="GENRES">
                  
                </optgroup> 

                </select>

                <select>
                <option className="option" value="default">Orden...</option>
                <optgroup className="optionGroup" label="Rating">
                    <option className="option" value="asc">Mayor a Menor</option>
                    <option className="option" value="desc">Menor a Mayor</option>
                </optgroup> 
                </select>

                <select>
                <option className="option" value="default">Alfabetico</option>
                <optgroup className="optionGroup" label="Ascendente-Descendente">
                    <option className="option" value="A-Z">A - Z</option>
                    <option className="option" value="Z-A">Z - A</option>
                </optgroup> 

                </select>





             </div>  
    )
}
export default Filtrado
