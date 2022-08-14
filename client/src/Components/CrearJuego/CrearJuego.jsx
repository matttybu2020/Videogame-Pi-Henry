import { React, useState } from "react";
//import { Link } from 'react-router-dom';
import axios from "axios";
import "./CrearJuego.css";
import NavBar from "../NavBar/NavBar.jsx";

function CrearJuego(props) {
  const [errors, setErrors] = useState({ form: "Debe completar el formulario" });
  
  const [form, setForm] = useState({
    name: "",
    description: "",
    releaseDate: "",
    image: "",
    rating: 0,
    genres: [],
    platforms: [],
  });


  
  function onInputChange(e) {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(
        validate ({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  }



   const handleChange = (e) => {
    if (e.target.parentNode.parentNode.id === "genres") {
      if (e.target.checked) {
        setForm((prevState) => ({
          ...prevState,
          genres: form.genres.concat(e.target.value),
        }));
      } else {
        setForm((prevState) => ({
          ...prevState,
          genres: form.genres.filter((x) => e.target.value !== x),
        }));
      }
    }
    if (e.target.parentNode.parentNode.id === "platforms") {
      if (e.target.checked) {
        setForm((prevState) => ({
          ...prevState,
          platforms: form.platforms.concat(e.target.name),
        }));
      } else {
        setForm((prevState) => ({
          ...prevState,
          platforms: form.platforms.filter((x) => e.target.name !== x),
        }));
      }
    }
    if (e.target.type !== "checkbox") {
      setForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));

    }
    setErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };



  const validate = (form) => {
    let errors = {};
    if (!form.name) {
      errors.name = "EL Juego Requiere un Nombre";
    } else if (form.name.length < 5) {
      errors.name = "EL Nombre del Juego no Puede ser Menor a 5 Caracteres!!!";
    }
    if (!form.description) {
      errors.description = "EL Juego Requiere una Descripcion";
    } else if (form.description.length < 8) {
      errors.description = "La Descripcion no Puede ser Menor a 8 Caracteres!!!";
    }
    if (!form.rating) {
      errors.rating = "Ingrese valor de Rating ";
    } else if (!/^[1-5]$/.test(form.rating)) {
      errors.rating = "EL valor no puede ser mayor a 5";
    }
    if(!form.image){
        errors.image = "Requiere una imagen";
    }else if (!/(https?:\/\/.*\.(?:png|jpg|jpeg))/i.test(form.image))
    {setForm({...form,
    image:""})

    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(form);
    let checkboxsErrors = [];
    if (form.genres.length < 1 || form.genres.length <3 ||form.genres.length >6) checkboxsErrors.push("Requiere un minimo de 5 Generos");
    if (form.platforms.length < 1 || form.platforms.length <3  || form.platforms.length >4 )
      checkboxsErrors.push("Requiere un minimo de 3 Plataformas ");
    if (Object.values(errors).length || checkboxsErrors.length ) {
      // Object.values --> retorno un array con los values

      return alert(Object.values(errors).concat(checkboxsErrors).join("\n"));
    }
    axios
      .post("http://localhost:3001/Videogame", form)
      .then((res) => console.log(res.data));
    alert(`${form.name} Creado Correctamente`);
    props.history.push("/videogames");
  };

  return (
    <>
      <NavBar />
      <div className="main-add">
        <div className="container-add">
          <h1>🕹️🎮Crea aqui Tu Juego 🕹️🎮</h1>
          <div className="div-cont">
            <form onSubmit={handleSubmit} onChange={handleChange}>
              <label htmlFor="name" className="title-name">
                <strong>💻 Nombre:</strong>
              </label>
              <br />
              <input
                className="name"
                placeholder="Nombre..."
                type="text"
                id="name"
                name="name"
                autoComplete="off"
              />
              <br />
              <br />
              <label htmlFor="description" className="title-name">
                <strong>📖 Descripcion: </strong>
              </label>
              <br />
               <textarea
                className="name"
                name="description"
                placeholder="Descripcion..."
                id="description"
                cols="30"
                rows="3"
              />
              <br />
              <br />
              <label htmlFor="date" className="title-name">
                <strong>📅 Fecha Lanzamiento:</strong>
              </label>
              <br />
              <input
                name="releaseDate"
                className="dt"
                type="date"
                id="date"
                required
              />
              <br />
              <br />
              <label htmlFor="rating" className="title-name">
                <strong>🏆 Rating </strong>
              </label>
              <br />
              <input
                name="rating"
                className="dt"
                placeholder="Rango de 1 a 5"
                type="tel"
                id="rating"
                maxLength="2"
                autoComplete="off"
              />
              <br />
              <br />
              <div>
                  <label>🖼️ Imagen URL: </label>
                  <input
                    name="image"
                    type="text"
                    placeholder="Ingrese imagen URL"
                    value={form.image}
                    onchange={onInputChange}
                    
                  ></input>
                </div>
                <br />
              <label className="title-name">
                <strong>🎮 Seleccione Generos: </strong>
              </label>
              <br />
              <div id="genres" className="genres-div">
                <div className="Action">
                  <input name="Action" value="2" type="checkbox" id="Action" />
                  <label htmlFor="Action">Action.</label>
                </div>
                <div className="indie">
                  <input name="Indie" value="1" type="checkbox" id="Indie" />
                  <label htmlFor="Indie">Indie.</label>
                </div>
                <div className="Adventure">
                  <input
                    name="Adventure"
                    value="3"
                    type="checkbox"
                    id="Adventure"
                  />
                  <label htmlFor="Adventure">Adventure.</label>
                </div>
                <div>
                  <input name="RPG" value="4" type="checkbox" id="RPG" />
                  <label htmlFor="RPG">RPG.</label>
                </div>
                <div>
                  <input
                    name="Strategy"
                    value="5"
                    type="checkbox"
                    id="Strategy"
                  />
                  <label htmlFor="Strategy">Strategy.</label>
                </div>
                <div>
                  <input
                    name="Shooter"
                    value="6"
                    type="checkbox"
                    id="Shooter"
                  />
                  <label htmlFor="Shooter">Shooter.</label>
                </div>
                <div>
                  <input name="Casual" value="7" type="checkbox" id="Casual" />
                  <label htmlFor="Casual">Casual.</label>
                </div>
                <div>
                  <input
                    name="Simulation"
                    value="8"
                    type="checkbox"
                    id="Simulation"
                  />
                  <label htmlFor="Simulation">Simulation.</label>
                </div>
                <div>
                  <input name="Puzzle" value="9" type="checkbox" id="Puzzle" />
                  <label htmlFor="Puzzle">Puzzle.</label>
                </div>
                <div>
                  <input name="Arcade" value="10" type="checkbox" id="Arcade" />
                  <label htmlFor="Arcade">Arcade.</label>
                </div>
                <div>
                  <input
                    name="Platformer"
                    value="11"
                    type="checkbox"
                    id="Platformer"
                  />
                  <label htmlFor="Platformer">Platformer.</label>
                </div>
                <div>
                  <input name="Racing" value="12" type="checkbox" id="Racing" />
                  <label htmlFor="Racing">Racing.</label>
                </div>
                <div>
                  <input
                    name="Massively-Multiplayer"
                    value="13"
                    type="checkbox"
                    id="Massively-Multiplayer"
                  />
                  <label htmlFor="Massively-Multiplayer">
                    Massively-Multiplayer.
                  </label>
                </div>
                <div>
                  <input name="Sports" value="14" type="checkbox" id="Sports" />
                  <label htmlFor="Sports">Sports.</label>
                </div>
                <div>
                  <input
                    name="Fighting"
                    value="15"
                    type="checkbox"
                    id="Fighting"
                  />
                  <label htmlFor="Fighting">Fighting.</label>
                </div>
              </div>
              <label className="title-name">
                <strong>🕹️ Seleccione Plataforma: </strong>{" "}
              </label>
              <br />
              <div id="platforms" className="plat-div">
                <div>
                  <input name="PC" type="checkbox" id="PC" />
                  <label htmlFor="PC">PC.</label>
                </div>
                <div>
                  <input name="iOS" type="checkbox" id="iOS" />
                  <label htmlFor="iOS">iOS.</label>
                </div>
                <div>
                  <input name="Android" type="checkbox" id="Android" />
                  <label htmlFor="Android">Android.</label>
                </div>
                <div>
                  <input name="macOS" type="checkbox" id="macOS" />
                  <label htmlFor="macOS">macOS.</label>
                </div>
                <div>
                  <input
                    name="PlayStation 4"
                    type="checkbox"
                    id="PlayStation 4"
                  />
                  <label htmlFor="PlayStation 4">PlayStation 4.</label>
                </div>
                <div>
                  <input
                    name="PlayStation 5"
                    type="checkbox"
                    id="PlayStation 5"
                  />
                  <label htmlFor="PlayStation 5">PlayStation 5.</label>
                </div>
                <div>
                  <input name="XBOX" type="checkbox" id="XBOX" />
                  <label htmlFor="XBOX">XBOX.</label>
                </div>
                <div>
                  <input name="PS Vita" type="checkbox" id="PS Vita" />
                  <label htmlFor="PS Vita">PS Vita.</label>
                </div>
              </div>
              <br />
              <div className="div-but-form">
                <button type="submit">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrearJuego;
/*export default function CrearJuego(){

    return (

       <div className='ContainerBox'>
        <div >
        <div >
        <Link  to="/Videogames">Volver a Videogames</Link>
        <form>
            <div >
            <label>💻 Ingrese Nombre: </label>
            <input autoComplete="off" type="text" placeholder="Nombre.." name="name"></input>
           
            </div>
            <div >
            <label>🎮 Seleccione Generos: </label>
            <select defaultValue="Generos" id="genres" name="genres">
            <option disabled={true}>Generos</option>
       
         
            </select>
           
            </div>
            <div >
            <label>🕹️ Seleccione Plataforma: </label>
            <select id="platforms" defaultValue="Platforms" name="Plataforma" >
            <option disabled={true}>Plataforma</option>
              
            </select>
           
            </div>
            <div >
            <label>📖 Descripcion: </label>
            <input autoComplete="off" type="text" placeholder="Descripcion" name="Descripcion" ></input>
          
            </div>
            <div >
            <label>🏆 Rating </label>
            <input type="number" placeholder="rating" name="rating"  ></input>
            
            </div>
            <div >
            <label>📅 Fecha Lanzamiento: </label>
            <input type="date" name="Fecha Lanzamiento"></input>
           
            </div>
            <div >
            <label>🖼️ Imagen URL: </label>
            <input autoComplete="off" type="text" name="Imagen" placeholder="Paste a img URL" ></input>
            </div>
            <button >Crear tu Juego</button>
    </form>
    </div>

    <div >
    <div >Seleccione Generos</div>
    <div >
    
    </div>
    </div>
    <div >
    <div>Seleccione Plataformas</div>
    <div >
   
    </div>
    </div>
</div>
</div>
)
}*/
