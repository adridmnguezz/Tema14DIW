//import Card from "./components/Card";
import { useState, useEffect } from "react";
import "./App.css";
//import Card, {CardBody} from "./components/Card";
//import List from "./components/List";
//import EjerUseeffect from "./components/EjerUseeffect";
// import Titulo from "./Titulo";

function App(){
  const [posicion, setPosicion] = useState ({x: 0, y:0});
  useEffect(() => {
    const manejarPosicion = (evento) => {
      setPosicion({x: evento.clientX, y: evento.clientY});
    }
    window.addEventListener("mousemove", manejarPosicion);

    return () => {
      window.removeEventListener("mousemove", manejarPosicion);
    };
  }, []);
  return (
    <div className="cuadroRaton" 
    style={{
      left: `${posicion.x}px`,
      top: `${posicion.y}px`,
    }}
    >
      <h1>La posicion del raton es:</h1>
      <h2>x: {posicion.x} y: {posicion.y}</h2>
    </div>
  )
}

  //const [mensaje, setMensaje] = useState("");
 // useEffect(() => {
  //  const manejarTecla = (evento) => {
  //console.log(evento.key);
  //    if(evento.key == "Escape"){
  //      setMensaje("Has presionado escape");
    //  }
    //};


    //window.addEventListener("keydown", manejarTecla);
  //}, []);





    //<div>
     // <h1>Has presionado la tecla</h1>
     // <h2>{mensaje}</h2>
     // </div>
    //<CardBody title={"Hola mundo"} text={"Este es el texto de CardBody."}></CardBody>
    //<Card>
    //  <CardBody title={"Hola mundo"} text={"Este es el texto del CardBody"}/>
    //  <List data={nombres} onSelect = {handleSelect} />
    //  <List data={nombres} onSelect = {handleSelect2} />
    //</Card>

export default App;